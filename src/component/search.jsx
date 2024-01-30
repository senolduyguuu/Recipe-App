import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../style/search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + input)
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      
			<div className="search-content-input">
			<FaSearch className="search-icon" />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Search..."
        className="search-input"
      />
			</div>

    </form>
  );
};

export default Search;
