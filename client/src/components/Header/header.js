import React from "react";
import styled from "styled-components";
import Title from "./title";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 40px;
  background-color: #5545ba;
  border-bottom: 1px solid #e7e7e7;
`;

export default Header;
