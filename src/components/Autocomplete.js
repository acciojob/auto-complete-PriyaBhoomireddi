import React, { useState } from "react";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function Autocomplete() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value) {
      const filteredSuggestions = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a fruit..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: "pointer", padding: "5px", border: "1px solid #ccc" }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
