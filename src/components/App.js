import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  function handleDeleteItem(deletedId){
    const updatedListings = listings.filter(listing => {
      return listing.id !== deletedId
    })
    setListings(updatedListings);
  }

  function handleSearch (search){
    const searchedListings = listings.filter((listing) => {
      const name = listing.description;
      return name.includes(search);
    })
    setListings(searchedListings)
  }

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])


  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listings={listings} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
