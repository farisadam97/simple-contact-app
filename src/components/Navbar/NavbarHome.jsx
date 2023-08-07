import { Link } from "react-router-dom";

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
