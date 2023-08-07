import React from "react";
import { Container, styled } from "@mui/material";
import Navbar from "../Navbar";
const CustContainer = styled(Container)({
  width: "480px",
  backgroundColor: "#fafafa",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});
const LayoutWrapper = (prop) => {
  return (
    <CustContainer>
      <Navbar />
      {prop.children}
    </CustContainer>
  );
};

export default LayoutWrapper;
