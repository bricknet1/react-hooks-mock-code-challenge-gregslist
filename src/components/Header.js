import React from "react";
import Search from "./Search";


function Header({onSearch, isSorted, onSort}) {
  
  let buttonText;

  if (isSorted) {
    buttonText = "Unsort"
  } else {
    buttonText = "Sort"
  }
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
      <button onClick={onSort}>{buttonText}</button>
    </header>
  );
}

export default Header;
