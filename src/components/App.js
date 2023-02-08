import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

function App() {

  const [listings, setListings] = useState([])
  const [isSorted, setIsSorted] = useState(false);

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchSubmit(searchBar) {
    setSearchTerm(searchBar)
  }

  const searchedListings = listings.filter((listing) => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))


  function handleDeleteItem(deletedId){
    const updatedListings = listings.filter(listing => {
      return listing.id !== deletedId
    })
    setListings(updatedListings);
  }

  function handleSort() {
    setIsSorted(!isSorted);
  }

  // .sort() sorts in place and returns a reference to the SAME array, now sorted. This was changing state.
  // I initialized sortedListings to be a copy of searchedListings with (...) instead.
  let sortedListings = [...searchedListings]
  
  // I think we'll need to handle switching between sorted and unsorted listings elsewhere, so I removed the extra layer of conditionality we had here.
  // (It was making my head hurt to try and read anyway.)
  sortedListings.sort((a, b) => {
    if (a.location.toLowerCase() < b.location.toLowerCase()) {
      return -1;
    } else if (a.location.toLowerCase() > b.location.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }});

  
  function handleSubmit(formInput){
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(formInput)
    })
    .then(res => res.json())
    .then(data => setListings([...listings, data]))
  }

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  // passing in sortedListings and isSorted as additional props in ListingsContainer.
  // passing in isSorted as additional prop in Header.
  return (
    <div className="app">
      <Header onSearch={handleSearchSubmit} searchTerm={searchTerm} setSearchTerm={setSearchTerm} isSorted={isSorted} onSort={handleSort}/>
      <Form onSubmit={handleSubmit}/>
      <ListingsContainer listings={searchedListings} isSorted={isSorted} sortedListings={sortedListings} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
