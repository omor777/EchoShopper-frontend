import { signOut } from "firebase/auth";
import { Button, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { setError, singOutUser } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { FaFilter } from "react-icons/fa";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const { isLoggedIn, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOutUser = async () => {
    try {
      await signOut(auth);
      dispatch(singOutUser());
      toast.success("Sing out successful");
    } catch (e) {
      dispatch(setError(e?.message));
      toast.error(error);
      console.error(e);
    }
  };

  const handleSidebarOpen = () => {
    dispatch(toggleSidebar(true));
  };

  return (
    <Navbar className="shadow-md bg-white">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white lg:block hidden text-teal-600">
          EchoShopper
        </span>
        <Button onClick={handleSidebarOpen} size="sm" className="lg:hidden">
          <FaFilter className="h-5 w-5" />
        </Button>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="md:items-center">
        <Navbar.Link active={pathname === "/"} as={Link} to="/">
          Home
        </Navbar.Link>
        {isLoggedIn ? (
          <Navbar.Link as="div">
            <Button onClick={handleSignOutUser}>Log Out</Button>
          </Navbar.Link>
        ) : (
          <>
            <Navbar.Link active={pathname === "/signIn"} as={Link} to="/signIn">
              Sing In
            </Navbar.Link>
            <Navbar.Link active={pathname === "/singUp"} as={Link} to="/singUp">
              Sing Up
            </Navbar.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
