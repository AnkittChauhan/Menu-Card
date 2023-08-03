const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemModel = require('./models/Items')
const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://NeonWolf:R2J6HwBq0s0Zhios@cluster0.qfk8blf.mongodb.net/")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });


    app.get("/getItems", async (req, res) => {
        try {
            const results = await itemModel.find();
            res.json(results);
        } catch (err) {
            res.status(500).json(err);
        }
    });
    

    app.post("/createItem", async (req, res) => {
        try {
            const items = req.body;
            const newItems = new itemModel(items);
            await newItems.save();
            res.json(items);
        } catch (err) {
            res.status(500).json(err);
        }
    });
    

    app.delete("/deleteItems/:id", async (req, res) => {
        const id = req.params.id;
        try {
            await itemModel.findByIdAndDelete(id).exec();
            res.json({ message: "ItemRemoved" });
        } catch (err) {
            res.status(500).json(err);
        }
    });
    



app.listen( 5500 , () => {
    console.log("Server is Running");
})