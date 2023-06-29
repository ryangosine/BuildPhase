import React, { useContext } from "react";
import styled from "styled-components";
import { CardContext } from "../Context/cardContext";
import SearchBarButton from "./searchBarButton";
// import { useNavigate } from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";
// import CardFound from "../../pages/cardFound";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(CardContext);

  // let navigate = useNavigate();

  // const handleSubmitClick = (ev) => {
  //   ev.preventDefault();
  //   navigate(`cardFound/${searchTerm}`);
  // };

  return (
    <SearchBarWrapper>
      <form>
        <label htmlFor="card-search">
          <span style={{ marginRight: "10px" }}>Search For A Card</span>
        </label>
        <input
          type="text"
          id="card-search"
          value={searchTerm}
          placeholder="Enter Card Name"
          name="search"
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
      </form>

      <SearchBarButton />
      {/* <div>
        <nav>
          <button type="submit" onClick={(ev) => handleSubmitClick(ev)}>
            <Link to="cardFound"></Link>
          </button>
        </nav>
      </div> */}

      {/* <Routes>
        <Route path="cardFound" element={<CardFound />}></Route>
      </Routes> */}
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
