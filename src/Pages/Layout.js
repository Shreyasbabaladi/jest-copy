import React, { useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  let history = useLocation();

  const currentPage = (history, path) => {
    if (history.pathname === path) {
      return { color: "#E96479" };
    } else {
      return { color: "#4E6E81" };
    }
  };

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar expand="md" container="md">
        <NavbarBrand href="/">Jest Copy</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link
                to="/form"
                className="nav-link"
                style={currentPage(history, "/form")}
              >
                Form
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/data"
                className="nav-link"
                style={currentPage(history, "/data")}
              >
                Data
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
