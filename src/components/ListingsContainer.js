import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, sortedListings, isSorted, onDeleteItem}) {

  const listingsMap = listings.map((listing) => {
    return <ListingCard key={listing.id} {...listing} onDeleteItem={onDeleteItem} />
  })

  // adding in a separate iterated array of sorted listing cards.
  const sortedListingsMap = sortedListings.map((listing) => {
    return <ListingCard key={listing.id} {...listing} onDeleteItem={onDeleteItem} />
  })

  // added conditional rendering of sorted vs. unsorted array of listing cards.
  return (
    <main>
      <ul className="cards">
        {isSorted ? sortedListingsMap : listingsMap}
      </ul>
    </main>
  );
}

export default ListingsContainer;
