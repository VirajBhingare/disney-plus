import React from "react";
import styled from "styled-components";
import { auth, provider, signInWithPopup } from "../firebase";

const Header = () => {
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a href="/home">
          <img src="/images/search-icon.svg" alt="HOME" />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="HOME" />
          <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src="/images/original-icon.svg" alt="HOME" />
          <span>ORIGINAL</span>
        </a>
        <a href="/home">
          <img src="/images/movie-icon.svg" alt="HOME" />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img src="/images/series-icon.svg" alt="HOME" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      font-size: 13px;
      color: rgb(249, 249, 249);
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.5px;
  padding: 8px 16px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
