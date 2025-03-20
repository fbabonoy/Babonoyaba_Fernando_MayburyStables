import express, { application } from "express"
import cors from "cors"
import "dotenv/config"
import multer from "multer";
import connectDB from "./db.js"
import Post from "./module/Model.js"

const app = express()
const port = 8081

app.use(express.json())

app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); 
    }
});

app.get("/", (req,res)=> {
    res.send("hello")
})

const upload = multer({ storage });



app.post("/herd", upload.single("image"), async (req, res) => {
    try {
        const { title } = req.body;
        if (!req.file) return res.status(400).json({ error: "Image is required" });

        const imageUrl = `/uploads/${req.file.filename}`;

        const newPost = new Post({ title, imageUrl });
        await newPost.save();

        res.json({ message: "Post created!", post: newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to upload image" });
    }
});

app.use("/herd", express.static("uploads"));

app.get("/herd", async (req, res)=> {    
    try {
        const post = await Post.findById({})
        res.status(200).json(post)
    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }

})

app.get("/posts/:id", async (req, res)=> {    
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }

})


app.listen(port, ()=> {
    console.log(`connected ${port}`)
    connectDB()
})


