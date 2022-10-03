require('dotenv').config();
const express = require('express');
const app = express();

const db = require('./config/db');

const Tries = require('./utils/search')
const LinkedList = require('./utils/movie_list')

let SearchObject = new Tries();
let search_key = new Array(20);
let MoviesList = new LinkedList(); 

for(let i=0;i<db.movies.length;i++){
    search_key[i] = db.movies[i].name.toLowerCase();
    SearchObject.addKey( search_key[i], MoviesList.insertNode(db.movies[i]) )
}


const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use((err,req,res,next)=>{
    res.status(500).json({
        'message':'server down'
    })
})

app.get('/',(req,res)=>{
    res.status(200).json({
        'message':'Book my show server'
    })
})

app.get('/search_keys',(req,res)=>{
    res.status(200).json({
        'message':'Book my show movie keys',
        "result":search_key
    })
})

//movies?search=beast
app.get('/movies',(req,res)=>{
    const { search } = req.query;
    if(search!==undefined && search!==null && search!==" " ){
        let result = SearchObject.searchKey(search)
        if(result!==null){
            res.status(200).json({
                'message':'',
                'result':[result[0].data]
            })
        } else {
            res.status(200).json({
                'message':'',
                'result':result
            })
        }
    } else {
        let result = MoviesList.display();
        res.status(200).json({
            'message':'All movies',
            'result': result
        })
    }
})

//movies/sort?attribute=ratings?sort=asd
//movies/sort?attribute=name?sort=dsd
app.get('/movies/sort',(req,res)=>{
    const { attribute , type } = req.query;
    MoviesList.mergeSortRun(attribute, type)
    let result = MoviesList.display();
    res.status(200).json({
        'message':'All movies',
        'result': result
    })
})


app.listen(process.env.PORT, ()=>console.log("cluster id : "+process.pid))