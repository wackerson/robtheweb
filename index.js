const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from root directory
app.use(express.static(__dirname));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Category routes
app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'games.html'));
});

app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'movies.html'));
});

app.get('/streaming', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'streaming.html'));
});

app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'books.html'));
});

app.get('/anime', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'anime.html'));
});

app.get('/adblockers', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'adblockers.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

