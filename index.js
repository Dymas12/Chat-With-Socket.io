var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require("socket.io")(http);




io.on("connection",(socket)=>{

    socket.on("disconnect", ()=>{
        console.log(`O ${socket.id} se desconectou`)
    })

socket.on("Boas Vindas", (data)=>{
    console.log(socket.id)
    console.log("Execuntando eventos de boas vindas")
    console.log(data)
})
socket.on("palavra",(data)=>{
    console.log(data);
    socket.emit("resultado",data + " - Guia do ruanzin deveco");
});

})
app.set("view engine","ejs");


app.get('/',(req,res,next)=>{
    res.render('index')
});



http.listen(3000, ()=>{
    console.log("app rodando")
})