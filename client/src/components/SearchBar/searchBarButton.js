import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { CardContext } from "../Context/cardContext";
import CardFound from "../../pages/cardFound";
/**
 *
 * THINGS TO WORK ON LATER:
 * ** Error Handling for if there is nothing in the search term**
 *
 *
 */
const SearchBarButton = () => {
  const { searchTerm, setSearchTerm } = useContext(CardContext);
  let navigate = useNavigate();

  const handleSubmitClick = (ev) => {
    ev.preventDefault();
    navigate(`cardFound/${searchTerm}`);
  };

  return (
    <ButtonWrapper>
      <div>
        <nav>
          <button type="submit" onClick={(ev) => handleSubmitClick(ev)}>
            <Link to="cardFound"></Link>
          </button>
        </nav>
      </div>

      <Routes>
        <Route path="cardFound" element={<CardFound />} />
      </Routes>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div``;

export default SearchBarButton;
