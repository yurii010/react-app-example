import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";

export default function App() {
  // https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region
  
  return (
    <>
      <header className="app-header">
        <h1>🌍 World Explorer</h1>
      </header>
      <main className="app">
        {/* TODO: <SearchBar /> */}
        <div className="cards-grid">
          {/* TODO: countries.map → <CountryCard /> */}
        </div>
      </main>
    </>
  );
}
