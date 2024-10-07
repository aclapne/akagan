import React from 'react';
import './Content.css';
import {Main_Concepts} from "./assets/data.js";
import MainConcept from "./MainConcept.jsx";

function Content(){

    return(
            <section id="core-concepts">
                <h2>Main Concepts</h2>
                <ul>
                    {Main_Concepts.map((conceptItem)=>( <MainConcept {...conceptItem} /> ))}
                </ul>
            </section>
    );
}

export default Content;