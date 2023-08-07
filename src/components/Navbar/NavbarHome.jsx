import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
const NavbarHome = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/add"}>Add</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHome;
