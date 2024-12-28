import React from 'react';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange }) => {
  return (
    <header className="p-4 bg-blue-600 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold">Pokedex Lite</h1>
      <input
        type="text"
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Search Pokémon..."
        className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none"
      />
    </header>
  );
};

export default Header;
