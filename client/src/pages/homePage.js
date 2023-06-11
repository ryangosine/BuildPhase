import React from "react";
import styled from "styled-components";
import Header from "../components/Header/header";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <SearchBar />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div``;

export default HomePage;
