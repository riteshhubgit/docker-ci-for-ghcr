// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ status: "API Running", env: process.env.NODE_ENV || "dev" });
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Ritz" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Kajal" }
  ]);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down...');
  process.exit(0);
});

