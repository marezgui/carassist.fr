import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "react-bootstrap";
import { MenuRounded, CloseRounded } from "@material-ui/icons";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const bsNavStyle = {
      className: "nav-link pl-4",
      role: "button",
      activeClassName: 'active'
    };

    const onToggle = (expanded: boolean) => {
      setExpanded(expanded);
    }

    return (
      <>
        <Navbar
          bg="dark"
          expand="md"
          variant="dark"
          sticky="top"
          collapseOnSelect
          onToggle={onToggle}
        >
          <Container>
            <NavbarBrand className="border border-danger p-2 font-weight-bold">
              Car Assist
            </NavbarBrand>

            <Navbar.Toggle>
              {!expanded ? <MenuRounded /> : <CloseRounded />}
            </Navbar.Toggle>

            <Navbar.Collapse>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink exact to="/" {...bsNavStyle}>
                    Accueil
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/cars" {...bsNavStyle}>
                    Véhicules
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/garage" {...bsNavStyle}>
                    Le Garage
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/contact" {...bsNavStyle}>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default NavBar;

