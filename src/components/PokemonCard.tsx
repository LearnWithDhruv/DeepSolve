import React from 'react';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, onClick }) => {
  return (
    <div
      className="p-4 border rounded-lg hover:shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img src={imageUrl} alt={name} className="w-full h-24 object-contain" />
      <h3 className="mt-2 text-center text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default PokemonCard;
