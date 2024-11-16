import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setBooks }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a valid search query.");
      return;
    }
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:4000/searchitem?query=${query}`
      );
      if (response.data.length === 0) {
        setError("No books found for the given query.");
      } else {
        setBooks(response.data);
      }
    } catch (err) {
      console.error("Error fetching books", err);
      setError(
        "An error occurred while fetching books. Please try again later."
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          disabled={!query.trim()}
          className={`px-4 py-2 bg-blue-600 text-white rounded-r-lg ${
            query.trim()
              ? "hover:bg-blue-700 transition duration-300"
              : "cursor-not-allowed opacity-50"
          }`}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;
