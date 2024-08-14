import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

  return (
    <Navbar>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          EchoShopper
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={pathname === "/"} as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link active={pathname === "/singIn"} as={Link} to="/singIn">
          Sing In
        </Navbar.Link>
        <Navbar.Link active={pathname === "/singUp"} as={Link} to="/singUp">
          Sing Up
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
