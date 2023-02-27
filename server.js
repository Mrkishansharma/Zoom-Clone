const express  = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid")

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.status(200).send("Hello World")
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room', (req,res)=>{
    // res.render('room')
    res.render('room', {roomId: req.params.room})
})


server.listen(3030);