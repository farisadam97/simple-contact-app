import { Container, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
const CustContainer = styled(Container)({
  width: "480px",
  backgroundColor: "#fafafa",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});
const LayoutWrapper = (prop) => {
  const location = useLocation();
  return (
    <CustContainer>
      {!location.pathname.startsWith("/login") && <Navbar />}
      {prop.children}
    </CustContainer>
  );
};

export default LayoutWrapper;
