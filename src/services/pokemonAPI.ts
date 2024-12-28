import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (offset: number, limit: number) => {
  const response = await axios.get(`${BASE_URL}/pokemon`, {
    params: { offset, limit },
  });
  return response.data;
};

export const fetchPokemonDetails = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
  return response.data;
};
