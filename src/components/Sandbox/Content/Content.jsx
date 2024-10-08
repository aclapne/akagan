import React from 'react';
import { Main_Concepts } from "./assets/data.js";
import MainConcept from "./MainConcept.jsx";

function Content() {
    return (
        <section className="content">
            <h2>Main Concepts</h2>
            <ul>
                {Main_Concepts.map((conceptItem) => (
                    <MainConcept key={conceptItem.id} {...conceptItem} />
                ))}
            </ul>
        </section>
    );
}

export default Content;
