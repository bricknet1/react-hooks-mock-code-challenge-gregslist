import React, {useState} from "react";

function Search({onSearch}) {
  
  const [searchBar, setSearchBar] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    onSearch(searchBar);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit} >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
