import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer/footer";
import HomePage from "./pages/homePage";
import GlobalStyles from "./GlobalStyles";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./components/Pages/Dashboard";
// import DeckBuilder from "./components/Pages/DeckBuilder";
// import CardFound from "./components/Pages/CardFound";
// import Profile from "./components/Pages/Profile";
// import Login from "./components/Pages/Login";
// import Register from "./components/Pages/Register";
// import HomePage from "./components/Pages/HomePage";

const App = () => {
  return (
    <MainWrapper>
      <GlobalStyles />
      <HomePage />
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboard" element={<Link to="../dashboard" />} />
          </Route>
          <Route path="deckbuilder/*" element={<DeckBuilder />} />
          <Route path="cardfound/:id" element={<CardFound />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
export default App;
