import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { CardContext } from "../components/Context/cardContext";

const ManyCardsFound = () => {
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  console.log("ID", id);
  const { cardDisplay, setCardDisplay } = useContext(CardContext);

  useEffect(() => {
    fetch(`/api/get-cards`)
      .then((res) => res.json())
      .then((data) => {
        const matchingCardName = data.filter((obj) => obj.id.includes(id));
        setCardDisplay(matchingCardName);
        setLoading(false);
        console.log("MATCHING CARD NAME", matchingCardName);
      });
  });

  if (loading) {
    return <>LOADING</>;
  } else {
    return (
      <>
        <ManyCardsPageWrapper>
          <Header />
          <CardImages src={cardDisplay.data.imageUrl} />
          <Footer />
        </ManyCardsPageWrapper>
      </>
    );
  }
};
const ManyCardsPageWrapper = styled.div``;
const CardImages = styled.img``;

export default ManyCardsFound;
