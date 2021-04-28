import React from "react";
import styled from "styled-components";
import cottage from "../../assets/cottage2.jpg";

const Header = () => {
  return (
    <Wrapper>
      <Filter></Filter>
      <Title>My Mortgage:</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 80vh;
  background-image: url(${cottage});
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  position: relative;
  flex-direction: column;
  background-attachment: fixed;
  padding: 30px;
`;

const Filter = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(8, 56, 99);
  opacity: 40%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: 100px;
  color: white;
  font-weight: bold;
  z-index: 1;
  /* text-shadow: 2px 2px 2px black; */
`;
