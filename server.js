const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Initialize DB
db.serialize(() => {
  db.run("CREATE TABLE votes (food TEXT)");
});

// Vote POST endpoint
app.post('/vote', (req, res) => {
  const food = req.body.food;
  db.run("INSERT INTO votes(food) VALUES (?)", [food], (err) => {
    if (err) return res.sendStatus(500);
    res.redirect('/results.html');
  });
});

// Results API
app.get('/results', (req, res) => {
  db.all("SELECT food, COUNT(*) as count FROM votes GROUP BY food", (err, rows) => {
    if (err) return res.sendStatus(500);
    res.json(rows);
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
