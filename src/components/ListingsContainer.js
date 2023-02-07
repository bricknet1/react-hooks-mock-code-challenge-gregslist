import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteItem}) {

  const listingsMap = listings.map((listing) => {
    return <ListingCard key={listing.id} {...listing} onDeleteItem={onDeleteItem} />
  })

  return (
    <main>
      <ul className="cards">
        {listingsMap}
      </ul>
    </main>
  );
}

export default ListingsContainer;
