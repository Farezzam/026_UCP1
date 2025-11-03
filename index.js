const express = require('express');
const app = express();
const port = 3000;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));
app.listen(port, () => {
    console.log("server started on the port 3000");
});

db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server started');
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.post("/music", async (req, res) => {
    const data = req.body;
    try {
        const Music = await db.Music.create(data);
        res.send(Music);
    } catch(err) {
        res.send(err);
    }   
})

app.get("/music", async (req, res) => {
    try {
        const music = await db.Music.findAll();
        res.send(music);
    } catch(err) {
        res.send(err);
    }
})

app.put("/music/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const Music = await db.Music.findByPk(id);
        if (!Music) {
            return res.status(404).send({ message: "Music tidak tersedia" });
        }
        await Music.update(data);
        res.send({ message: "Music berhasil diupdate", Music });
    } catch(err) {
        res.status(500).send(err);
    }
})


