import express from "express";
import cors from "cors";
const PORT = 5550;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/metadata.json", (req, res) => {
    const { name, symbol, description, image } = req.body;

    if(!name || !symbol || !description || !image) {
        res.status(404).json({
            success: false,
            message: "All fields are required"
        })
    }

    res.json({
        name: name,
        symbol: symbol,
        description: description,
        image: image
    })
});

app.listen(PORT, () => {
    console.log("Server activated on PORT", PORT);
});