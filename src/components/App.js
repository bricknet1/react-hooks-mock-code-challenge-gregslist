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

  // let sortedListings;

  // if (isSorted) {
  //   sortedListings = listings.sort((a, b) => {
  //     if (a.location.toLowerCase() < b.location.toLowerCase()) {
  //       return -1;
  //     } else if (a.location.toLowerCase() > b.location.toLowerCase()) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }})
  //   } else {
  //     sortedListings = listings;
  //     }
  
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


  return (
    <div className="app">
      <Header onSearch={handleSearchSubmit} searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSort={handleSort}/>
      <Form onSubmit={handleSubmit}/>
      <ListingsContainer listings={searchedListings} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
