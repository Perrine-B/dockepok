import axios from "axios";

const url = process.env.API || 'http://localhost:3001';

const APIService = {
  getAllPokemons: () => {
    return axios.get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  },
};

export default APIService;