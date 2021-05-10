import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "./components/Card";
import {Box} from '@material-ui/core';
import APIService from "./services/APIService";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  pokedex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
}));

function App() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    APIService.getAllPokemons()
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          console.log(data.rows)
          setIsLoading(false);
          setPokemons(data.rows);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Recuperer les infos de l'API
  // Les coller dans un state

  return (
    <Box>
      <Header />
      <Box className={classes.pokedex}>
      {isLoading && <CircularProgress color="secondary" />}
      {!isLoading &&
        pokemons.length !== 0 &&
        pokemons.map((pokemon) => <Card pokemon={pokemon}></Card>)}
        </Box>
    </Box>
  );
}

export default App;
