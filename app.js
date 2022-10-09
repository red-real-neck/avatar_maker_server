const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  
const upload = multer({ storage: storage })

app.use(express.json());
app.use(cors());

app.post('/uploadGLTF', upload.single("avatar"), (req, res) => {
    console.log("req.body: ", req.body, " req.file: ", req.file);
    console.log('req.body.avatar:', req.body.avatar);
    res.send(req.body);
});
  
module.exports = app;