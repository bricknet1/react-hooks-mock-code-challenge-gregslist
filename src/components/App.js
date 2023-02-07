import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

function App() {

  const [listings, setListings] = useState([])
  const [isSorted, setIsSorted] = useState(false);

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

  function handleSort() {
    setIsSorted(!isSorted);
  }

  let sortedListings;

  if (isSorted) {
    sortedListings = listings.sort((a, b) => {
      if (a.location.toLowerCase() < b.location.toLowerCase()) {
        return -1;
      } else if (a.location.toLowerCase() > b.location.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }})
    } else {
      sortedListings = listings;
      }
  

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])


  return (
    <div className="app">
      <Header onSearch={handleSearch} onSort={handleSort}/>
      <Form />
      <ListingsContainer listings={sortedListings} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
