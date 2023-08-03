const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemModel = require('./models/Items')
const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://NeonWolf:R2J6HwBq0s0Zhios@cluster0.qfk8blf.mongodb.net/")

app.get("/getItems" , async ( req , res ) => {
    itemModel.find().then((err,results) => {
        if(err){
            res.json(err)
        } else{
            res.json(results)
        }
    })
})

app.post("/createItem" , async (req,res) => {

    const items = req.body;
    const newItems = new itemModel(items);
    await newItems.save()

    res.json(items)
})

app.delete("/deleteItems/:id" , async (req,res) => {
    const id = req.params.id;
    await itemModel.findByIdAndDelete(id).exec()

    res.json({message: "ItemRemoved"})
})




app.listen( 5500 , () => {
    console.log("Server is Running");
})