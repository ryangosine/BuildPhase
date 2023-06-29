import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { CardContext } from "../Context/cardContext";
import CardFound from "../../pages/cardFound";
import ManyCardsFound from "../../pages/manyCardsFound";

const SearchBarButton = () => {
  const { searchTerm } = useContext(CardContext);
  let navigate = useNavigate();

  const handleSubmitClick = (ev) => {
    ev.preventDefault();

    const isExactMatch = searchTerm;
    if (isExactMatch) {
      navigate(`cardFound/${searchTerm}`);
    } else {
      navigate("manyCardsFound");
    }
  };

  return (
    <ButtonWrapper>
      <div>
        <nav>
          <button type="submit" onClick={handleSubmitClick}>
            <Link to=""></Link>
          </button>
        </nav>
      </div>

      <Routes>
        <Route path="/manyCardsFound" element={<ManyCardsFound />} />
        <Route path="/cardFound/:id" element={<CardFound />} />
      </Routes>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div``;

export default SearchBarButton;
