import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <ReturnToHome>
      <nav>
        <Link to="/">
          <h1>BUILD PHASE</h1>
        </Link>
      </nav>
    </ReturnToHome>
  );
};

const ReturnToHome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
  }

  li {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.6rem;
    list-style: none;
  }
`;

export default Title;
