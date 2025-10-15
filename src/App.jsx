import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";

const Box = styled.div`
  width: ${(props)=> props.size === "large" ? "150px" : props.size || "100px;"};
  height:100px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: ${(props)=>props.bgColor || "lightgray"};
`
const Text = styled.p`
  font-size: 16px;
  color: #333;
`
const Primary = styled.button`
  padding: 8px 12px;
  border : 1px solid #ccc; 
  border-radius: 8px;
  cursor: pointer;
  &:hover{opacity: 0.8;};
  background: ${(props) => (props.primary ? "blue" : "grey")};
  color:      ${(props) => (props.primary ? "white": "black")};
`
const App = () => {

  return (
    <div>
      <GlobalStyle />
        <Text>Text컴포넌트</Text>
        <Box>기본</Box>
        <Box bgColor="skyblue">Color props</Box>
        <Box size="large">Large</Box>
        <Box size="70px">70px</Box>
        <Primary>Basic</Primary>
        <Primary primary="white">True</Primary>
    </div>
  );
};

export default App;