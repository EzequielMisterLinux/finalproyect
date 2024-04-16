import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import UserProfile from './UserProfile'
import SearchInput from './Search';

const NavbarTheme = styled.nav `
    background-color: #dfe6e9;
    font-weight: 400;
    span{
        font-weight: bold;
    }
    padding: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        padding-right: 2rem;
    }
`
const NavbarLinks = styled.div `
    margin-left: 8rem;
`
const NavbarUtility = styled.div `
    display: flex;
    
`

const Navbar = () => {
    return (
      <NavbarTheme>
      <h2>Logo Random Test</h2>
        <NavbarLinks>  
            <a href='/'>Home</a>
            <a href='/'>Pricing</a>
            <a href='/'>Acerca de</a>
            <a href='/'>Tienda</a>
        </NavbarLinks>
        <NavbarUtility>
            <SearchInput />
            <Button>Test</Button>
            <UserProfile />
        </NavbarUtility>
      </NavbarTheme>
      
    );
  };

export default Navbar;