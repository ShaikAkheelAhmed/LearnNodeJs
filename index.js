const express = require('express')
const defaultCtrl = require('./controllers/defaultCtrl')

const app = express()

app.listen(9000, function(){
    console.log("server is running on 9000")
})

//new comment

app.get('/', defaultCtrl.home)

app.get('/books', function(req,res){
    const books = [{
        id :1,
        name:"refactoring",
        price:150
    },{
        id:2,
        name:'great learning',
        price : 70
    },{
        id : 3,
        name: 'youtube',
        price:80

    }]
    res.json(books)
})

app.get('/authors', function(req,res){
    const authors = [{
        id :1,
        name:"james bond",
       
    },{
        id:2,
        name:'captain americal',
        price : 70
    }]
res.json(authors)
})

app.get('/health', defaultCtrl.health)