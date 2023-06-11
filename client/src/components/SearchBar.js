import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <form>
        <label htmlFor="card-search">
          <span style={{ marginRight: "10px" }}>Search For A Card</span>
        </label>
        <input
          type="text"
          id="card-search"
          //   value={searchTerm}
          placeholder="Enter Card Name"
          name="search"
          //   onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>

      {/* <div>
        <nav>
          <button type="submit" onClick={(ev) => handleSubmitClick(ev)}>
            <Link to="cardfound">
              <FiSearch style={{ fontSize: "2rem" }} />
            </Link>
          </button>
        </nav>
      </div> */}
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  width: 25rem;
  margin: auto;
  margin-top: 15rem;

  button {
    padding: 13px;
  }
`;

export default SearchBar;
