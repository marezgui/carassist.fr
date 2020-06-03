import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "react-bootstrap";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import styled from 'styled-components';
import Logo from '../Icons/Logo';

const BrandText = styled.div`
  font-size: 24px;
  font-family: "Kanit", sans-serif;
`;

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
      <Navbar
        bg="dark"
        expand="md"
        variant="dark"
        sticky="top"
        collapseOnSelect
        onToggle={onToggle}
      >
        <Container>
          <NavbarBrand className="p-2 font-weight-bold d-flex justify-content-center align-items-center">
            <Logo fill='#FFF' />
            <BrandText className="ml-2"> CAR ASSIST </BrandText>
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
                <NavLink to="/location" {...bsNavStyle}>
                  Location
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/depannage" {...bsNavStyle}>
                  Dépannage
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;

