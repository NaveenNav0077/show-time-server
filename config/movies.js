const movies = [
    {
        movie_id:1,
        name:"Avatar",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00004000-qhqeymhugt-portrait.jpg",
        language:"English, Malayalam, Hindi, Tamil, Telugu",
        format:"3D",
        duration:"2hrs 30 mins", 
        genre:"Action, Thriller, Comedy, Sci-Fi",
        ratings:93
    },
    {
        movie_id:2,
        name:"Minions",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAxMmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122133-hqbavmwpku-portrait.jpg",
        language:"English, Malayalam, Hindi, Tamil, Telugu",
        format:"2D, 3D, IMAX",
        duration:"1hrs 30 mins", 
        genre:"Comedy, Fantasy",
        ratings:86
    },
    {
        movie_id:3,
        name:"Beast",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333354-ratqcxklzk-portrait.jpg",
        language:"English, Malayalam, Hindi, Tamil, Telugu",
        format:"2D, 3D, IMAX",
        duration:"1hrs 30 mins", 
        genre:"Action, Thriller, Adventure",
        ratings:81
    },
    {
        movie_id:"4",
        name:"Bullet Train",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323863-exbjurcwvu-portrait.jpg",
        language:"English, Malayalam, Hindi, Tamil, Telugu",
        format:"2D IMAX",
        duration:"1hrs 30 mins", 
        genre:"Action, Thriller, Crime",
        ratings:86
    },
    {
        movie_id:"5",
        name:"Top Gun: Maverick",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-xvsyklpzlg-portrait.jpg",
        language:"English, Malayalam, Hindi, Tamil, Telugu",
        format:"2D 3D IMAX 4DX",
        duration:"1hrs 30 mins", 
        genre:"Action, Thriller",
        ratings:92
    },
    {
        movie_id:"6",
        name:"God Father",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NzdrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00325579-qjmfrlgfun-portrait.jpg",
        language:"Malayalam",
        format:"2D IMAX",
        duration:"2hrs 30 mins",
        genre:"Action, Thriller",
        ratings: 77
    },
    {
        movie_id:"7",
        name:"Sita Ramam",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICAxNzdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329656-zmlwfkjupb-portrait.jpg",
        language:"Malayalam",
        format:"2D IMAX",
        duration:"2hrs 30 mins",
        genre:"Comedy, Crime",
        ratings:92
    },
    {
        movie_id:"8",
        name:"Brahmastra",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAyMzRrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00063710-tqcvefbetl-portrait.jpg",
        language:"Malayalam, Hindi, Tamil, Telugu",
        format:"2D 3D IMAX 4DX",
        duration:"2hrs 30 mins",
        genre:"Action, Thriller, Fantasy",
        ratings:77
    },
    {
        movie_id:"9",
        name:"Ponniyin Selvan Part One",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA3OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323897-zvgjhaqnxq-portrait.jpg",
        language:"English, Malayalam, Hindi, Tamil, Telugu",
        format:"2D 3D IMAX 4DX",
        duration:"1hrs 30 mins",
        genre:"Action, Thriller, Comedy, Sci-Fi, Adventure, Crime, Fantasy",
        ratings:87
    },
    {
        movie_id:"10",
        name:"Trigger",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339552-lznfuszjvt-portrait.jpg",
        language:"English, Malayalam, Hindi, Tamil, Telugu",
        format:"2D 3D IMAX 4DX",
        duration:"1hrs 30 mins",
        genre:"Action, Thriller, Comedy, Sci-Fi, Adventure, Crime, Fantasy",
        ratings:79
    }
]

module.exports = movies