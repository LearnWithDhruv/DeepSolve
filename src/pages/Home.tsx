import React, { useState, useEffect } from 'react';
import { fetchPokemonList } from '../services/pokemonAPI';
import PokemonCard from '../components/PokemonCard';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const limit = 20;
  const offset = (currentPage - 1) * limit;

  useEffect(() => {
    const loadPokemon = async () => {
      setIsLoading(true);
      const data = await fetchPokemonList(offset, limit);
      setPokemonList(data.results);
      setIsLoading(false);
    };
    loadPokemon();
  }, [offset, limit]); // Include offset and limit as dependencies

  const filteredPokemon = pokemonList.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredPokemon.map(p => (
            <PokemonCard
              key={p.name}
              name={p.name}
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('/')[6]}.png`}
              onClick={() => navigate(`/pokemon/${p.name}`)}
            />
          ))
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrevious={() => setCurrentPage(currentPage - 1)}
      />
    </div>
  );
};

export default Home;
