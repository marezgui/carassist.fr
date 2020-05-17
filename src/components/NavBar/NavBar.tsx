import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "react-bootstrap";
import { MenuRounded } from "@material-ui/icons";

const NavBar = () => {
    const bsNavStyle = {
        className: 'nav-link',
        role: 'button'
    };

    return (
      <>
        <Navbar
          bg="dark"
          expand="md"
          variant="dark"
          sticky="bottom"
          collapseOnSelect
        >
          <Navbar.Toggle>
            <MenuRounded />
          </Navbar.Toggle>

          <NavbarBrand>Car Assist</NavbarBrand>

          <Navbar.Collapse>
            <Nav navbar>
              <NavItem>
                <Link to="/" {...bsNavStyle}>
                  Accueil
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/cars" {...bsNavStyle}>
                  Véhicules
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/garage" {...bsNavStyle}>
                  Le Garage
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/contact" {...bsNavStyle}>
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
};

export default NavBar;
