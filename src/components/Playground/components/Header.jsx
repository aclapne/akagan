import React from 'react';
import ticImg from "../../../assets/tic.jpg"

function Header() {
    return (
        <header>
            <img src={ticImg} alt="Tic-Tac-Toe"/>
            <h1>Tic-Tac-Toe</h1>
        </header>
    )
}
export default Header;