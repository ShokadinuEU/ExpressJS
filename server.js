const express = require('express');

const app = express();

app.get('/api/heroes', (req, res) => {
  const heroes = [
    {id: 1, firstName: 'Tirion', lastName: 'Fordring'},
    {id: 2, firstName: 'Varian', lastName: 'Wryn'},
    {id: 3, firstName: 'Arthas', lastName: 'Menethil'},
  ]

  res.json(heroes)
})

const port = 5000;

app.listen(port, () => console.log(`Server starts on port ${port}`))