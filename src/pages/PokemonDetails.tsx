import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonDetails } from '../services/pokemonAPI';

const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [details, setDetails] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDetails = async () => {
      const data = await fetchPokemonDetails(name!);
      setDetails(data);
    };
    loadDetails();
  }, [name]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <button onClick={() => navigate('/')} className="mb-4 underline">
        Back
      </button>
      <h1 className="text-2xl font-bold">{details.name}</h1>
      <img
        src={details.sprites.front_default}
        alt={details.name}
        className="my-4 mx-auto"
      />
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
      <h3 className="mt-4 font-semibold">Abilities:</h3>
      <ul>
        {details.abilities.map((a: any) => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
