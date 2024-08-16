'use client';

import React, { useState } from 'react';
import styles from './styles/SearchBar.module.css'; 
import products from "@/app/products";

// Definieer het type voor een product
interface Product {
  title: string;
  [key: string]: any; // Hiermee geef je aan dat er andere eigenschappen kunnen zijn
}

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]); // Gebruik het Product type hier

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: e.target.value }),
      });

      const data = await response.json();
      setSuggestions(data.results);
    } catch (error) {
      console.error('Er is iets misgegaan:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className={styles.autocomplete}>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Zoek op artiest, event, locatie...."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li className={styles.item} key={index}>
            <img
              src={`http://unsplash.it/100?random=${index}`}
              alt="Random Picture"
            />
            <p>{suggestion.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
