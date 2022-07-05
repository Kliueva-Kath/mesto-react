import React from "react";
import App from "./App.jsx";
import logoPath from "../images/header__logo.svg";

function Header() {
    return ( <
        header className = "header" >
        <
        img className = "header__logo"
        src = { logoPath }
        alt = "логотип сайта" / >
        <
        /header>
    );
}
export default Header;