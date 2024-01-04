import React from "react";

function Search({ searchTerm, onHandleSearch }) {
  const onHandleChange = (e) => {
    onHandleSearch(e.target.value);
  };

  return (
    <section>
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={onHandleChange}
          value={searchTerm}
        />
      </div>
    </section>
  );
}

export default Search;
