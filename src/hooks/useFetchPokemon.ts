import { useState, useEffect } from 'react';
import { fetchPokemonList } from '../services/pokemonAPI';

const useFetchPokemon = (offset: number, limit: number) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchPokemonList(offset, limit);
      setData(result.results);
      setLoading(false);
    };
    fetchData();
  }, [offset, limit]);

  return { data, loading };
};

export default useFetchPokemon;
