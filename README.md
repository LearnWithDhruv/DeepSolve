
# Pokedex Lite Web Application

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Components and Files](#components-and-files)
    - [Components](#components)
    - [Pages](#pages)
    - [Services](#services)
    - [Utils](#utils)
    - [Hooks](#hooks)
7. [Running the Application](#running-the-application)
8. [Future Enhancements](#future-enhancements)

---

## Overview
Pokedex Lite is a responsive web application that allows users to explore Pokémon data using the public **PokéAPI**. Users can search, filter, paginate, view details, and mark their favorite Pokémon.

---

## Features
- List Pokémon fetched from PokéAPI.
- Search Pokémon by name.
- Filter Pokémon by type.
- Pagination for smooth navigation.
- Favorite Pokémon functionality persisted in local storage.
- Detailed Pokémon view with stats and abilities.
- Fully responsive UI (mobile, tablet, and desktop).

---

## Technologies Used
- **Frontend Framework**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **API Handling**: Axios
- **Routing**: React Router DOM
- **State Management**: React hooks

---

## Folder Structure
```
src/
├── components/       # Reusable components
│   ├── PokemonCard.tsx
│   ├── Header.tsx
│   ├── Pagination.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── PokemonDetails.tsx
├── services/         # API-related code
│   └── pokemonAPI.ts
├── utils/            # Utility functions
│   ├── localStorage.ts
├── hooks/            # Custom hooks
│   └── useFetchPokemon.ts
├── App.tsx           # Main component
├── index.tsx         # Entry point
└── styles/           # Styling files
```

---

## Setup and Installation

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd pokedex-lite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

4. **Build the application for production** (optional):
   ```bash
   npm run build
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Components and Files

### Components
#### `PokemonCard.tsx`
Displays Pokémon name and image. Includes an `onClick` handler for navigation.

#### `Header.tsx`
A reusable header with a title and search bar for filtering Pokémon.

#### `Pagination.tsx`
Handles navigation between pages using "Next" and "Previous" buttons.

### Pages
#### `Home.tsx`
- Fetches and displays a list of Pokémon.
- Implements search, filter, and pagination.
- Uses the `PokemonCard`, `Header`, and `Pagination` components.

#### `PokemonDetails.tsx`
- Fetches and displays detailed Pokémon information such as stats and abilities.
- Provides a back button for returning to the home page.

### Services
#### `pokemonAPI.ts`
Handles API requests to the PokéAPI. Includes functions for fetching Pokémon list and details.

### Utils
#### `localStorage.ts`
Manages local storage for saving and retrieving favorite Pokémon.

### Hooks
#### `useFetchPokemon.ts`
Custom hook to handle Pokémon list fetching with loading state management.

---

## Running the Application
1. **Development Mode**:
   Run the app locally with live reloading:
   ```bash
   npm start
   ```

2. **Production Build**:
   Generate a production build for deployment:
   ```bash
   npm run build
   ```

3. **Deployment**:
   Deploy to platforms like **Vercel** or **Netlify**. For example, with Vercel:
   ```bash
   npx vercel deploy
   ```

---

## Future Enhancements
- Implement infinite scrolling for smoother user experience.
- Add a dark mode toggle for better accessibility.
- Enhance filtering options (e.g., multiple types).
- Allow user authentication for saving favorites on the cloud.

---

Feel free to explore the code and contribute to improving the application!
