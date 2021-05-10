const db = require('./db');
//const helper = require('../helper');
//const config = require('../');

async function fetchPokemons(){
  const rows = await db.query(
    `SELECT * FROM pokemons`
  );

  return {
    rows,
   
  }
}

module.exports = {
    fetchPokemons
}