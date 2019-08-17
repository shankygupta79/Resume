const route = require('express').Router()
const path=require('path')
route.get('/', (req, res) => {

    res.sendFile(path.join(__dirname,'../views/page.html'))
  
})
route.get('/css',(req,res)=>{

    res.sendFile(path.join(__dirname,'../views/css.css'))
    
})
route.get('/img',(req,res)=>{

    res.sendFile(path.join(__dirname,'../views/img.jpg'))
    
})
route.get('/ds',(req,res)=>{

    res.sendFile(path.join(__dirname,'../views/ds.pdf'))
    
})

module.exports = route