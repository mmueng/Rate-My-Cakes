const express = require("express");
const app = express();
//Angular
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ratecake", { useNewUrlParser: true });

const CommentSchema = new mongoose.Schema({
    rate: Number,
    comment: String
}, {
    timestamps: true
});


const CakeSchema = new mongoose.Schema({
    name: String,
    img_url: String,
    comments: [CommentSchema]
}, {
    timestamps: true
});

const Cake = mongoose.model("Cake", CakeSchema);
const Comment = mongoose.model("Comment", CommentSchema);
const flash = require('express-flash');
app.use(flash());


app.get("/cake", (req, res) => {
    Cake.find()
        .then(data => res.json({ msg: "Success", result: data }))
        .catch(err => res.json({ msg: "Error", err: err }));
});

app.post("/cake/new", (req, res) => {
    const name = req.body.name;
    const img_url = req.body.img_url;
    const newCake = new Cake();
    newCake.name = name;
    newCake.img_url = img_url;
    Cake.create(newCake)
        .then(data => res.json({ message: 'success', result: data }))
        .catch(err => res.json({ message: 'error', error: err }))
});

app.get("/cake/:id", (req, res) => {
    const id = req.params.id;
    console.log("**********", { id });
    Cake.findOne({ _id: id })
        .then(data => res.json({ msg: "Success get one by id", result: data }))
        .catch(err => res.json({ msg: "Error Somthing Went Wrong", err: err }))
});

app.put("/cake/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params.id);
    console.log(req.body);
    Cake.findByIdAndUpdate(req.params.id, { $push: { comments: { rate: req.body.rate, comment: req.body.comment } } })
        .then(data => res.json({ msg: "Success Add rate and comment", result: data }))
        .catch(err => res.json({ msg: "Error Something went wrong", err: err }))
});

app.delete("/cake/:id", (req, res) => {
    const { id } = req.params;
    Cake.remove({ _id: id })
        .then(data => res.json({ msg: "Remove Success", result: data }))
        .catch(err => res.json({ msg: " Error", err: err }))
})

app.listen(8000, () => console.log("Listening on port 8000"));