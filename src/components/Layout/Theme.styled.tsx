import React from "react"
import styled from "styled-components"

export const Theme = styled.div`
  p,
  span {
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
  }

  .hdr {
    color: #333;
    background: #233140;
    text-transform: uppercase;
    a {
      font-weight: 700;
    }
  }

  .brand {
    font-size: 1.5em;
    color: white;
  }

  .navbar-toggle {
    color: #fff;
    text-transform: uppercase;
    font-size: 10px;
    border-color: #fff;
  }

  .fa-bars {
    color: #fff;
  }

  .navbar-toggler:hover {
    background-color: #18bc9c;
    color: #fff;
    border-color: #18bc9c;
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%285, 285, 285, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .nav-link {
    a {
      color: white;
    }
  }
`
