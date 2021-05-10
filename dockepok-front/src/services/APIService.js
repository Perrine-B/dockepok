import axios from "axios";

const APIService = {
  getAllPokemons: () => {
    return axios.get("http://localhost:3001/", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  },
};

export default APIService;