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


