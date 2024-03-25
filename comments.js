 //Create web Server using Express 
    const express = require('express');
    const app = express();
    const port = 3000;
    const path = require('path');
    const fs = require('fs');
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
    );
    app.post('/comments', (req, res) => {
        const comment = req.body.comment;
        fs.appendFile('comments.txt', comment + '\n', (err) => {
            if (err) {
                res.status(500).send('Error');
            } else {
                res.status(200).send('Success');
            }
        });
    });
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });