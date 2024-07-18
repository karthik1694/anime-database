import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Racing+Sans+One&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration:none;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background-color: #121452;
        color: #fff;
        font-family: 'Racing Sans One', cursive;
    }
`;

export default Globalstyle;