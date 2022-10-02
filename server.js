require('dotenv').config();
const express = require('express');
const app = express();

const db = require('./config/db');

const Tries = require('./utils/search')
const LinkedList = require('./utils/movie_list')

let searchObject = new Tries();
let search_key = new Array(20);
let movie_list = new LinkedList(); 

for(let i=0;i<db.movies.length;i++){
    search_key[i] = db.movies[i].name.toLowerCase();
    searchObject.addKey( search_key[i], movie_list.insertNode(db.movies[i]) )
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

app.get('/movies',(req,res)=>{
    const { search } = req.query;
    if(search!==undefined && search!==null && search!==" " ){
        let result = searchObject.searchKey(search)
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
        let result = movie_list.display();
        res.status(200).json({
            'message':'All movies',
            'result': result
        })
    }
})




app.listen(process.env.PORT, ()=>console.log("cluster id : "+process.pid))

