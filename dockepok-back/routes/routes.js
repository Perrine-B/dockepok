const express = require('express');
const router = express.Router(); 
const getAll = require("../services/getAll.js")

router.get('/', async function(req, res, next) {
    try {
      res.json(await getAll.fetchPokemons());
    } catch (err) {
      console.error(`Error while getting pokemons `, err.message);
      next(err);
    }
  });

module.exports = router;