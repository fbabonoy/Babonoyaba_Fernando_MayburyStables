import express, { application } from "express"
import cors from "cors"
import "dotenv/config"
import multer from "multer";
import connectDB from "./db.js"
import Herd from "./module/Model.js"
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Make sure to import fileURLToPath


const app = express()
const port = 8081

app.use(express.json())

app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const uploadDir = path.join(__dirname, 'herd');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true }); // Ensure the directory is created
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {        
        cb(null, "herd/");
    },
    filename: function (req, file, cb) {
        console.log(file.originalname);

        cb(null, Date.now() + "-" + file.originalname); 
    }
});

app.get("/", (req,res)=> {
    res.send("hello")
})

const herd = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limit file size to 5MB
    }
});


app.post("/herd", herd.single("image"), async (req, res) => {

    try {
        const { title } = req.body;
        if (!req.file) return res.status(400).json({ error: "Image is required" });

        const imageUrl = `/herd/${req.file.filename}`;

        const newImage = new Herd({ title, imageUrl });
        await newImage.save();

        res.json({ message: "horse image created!", post: newImage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to herd image" });
    }
});

app.use("/herd", express.static("herd"));

app.get("/herd", async (req, res)=> {    
    try {
        const herd = await Herd.find({})
        res.status(200).json(herd)
    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }

})

app.get("/herd/:id", async (req, res)=> {    
    try {
        const herd = await Herd.findById(req.params.id)
        res.status(200).json(herd)
    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }

})


app.listen(port, ()=> {
    console.log(`connected ${port}`)
    connectDB()
})


