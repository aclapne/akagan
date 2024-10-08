import React from 'react';
import './Sandbox.css';
import Header from "./Header.jsx";
import Content from "./Content/Content.jsx";
import Examples from "./Examples.jsx";

function Sandbox() {
    return (
        <main className="sandbox">
            <Header />
            <div className="sandbox__content-wrapper">
                <Content />
                <Examples />
            </div>
        </main>
    );
}

export default Sandbox;
