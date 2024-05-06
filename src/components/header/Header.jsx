import React from 'react';
import { Logo, Nav, NavWrapper } from './headerStyled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavWrapper>
        <Nav>
          <Link to={'/'}>
            <Logo>Flag Atlas Online</Logo>
          </Link>
        </Nav>
      </NavWrapper>
    </>
  );
};

export default Header;
