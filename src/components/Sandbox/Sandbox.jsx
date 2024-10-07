import React, { useState } from 'react';
import './Sandbox.css';
import Header from "./Header.jsx";
import Content from "./Content/Content.jsx";
import TabButton from "./TabButton/TabButton.jsx";
import { Tab_Content } from "./TabButton/TabContent.js";

function Sandbox() {
    const [selectedTopic, setSelectedTopic] = useState(Tab_Content[0]); // İlk konuyu varsayılan olarak seçiyoruz.

    function handleSelect(buttonId) {
        setSelectedTopic(Tab_Content[buttonId]);
    }

    return (
        <main className="sandbox">
            <div className="sandbox__container">
                <section className="sandbox__header">
                    <Header />
                </section>
                <section className="sandbox__content">
                    <Content />
                </section>
            </div>
            <section className="sandbox__examples">
                <h2 className="sandbox__examples-title">Examples</h2>
                <menu className="sandbox__examples-menu">
                    {Tab_Content.map((tab, index) => (
                        <TabButton
                            key={tab.id}
                            isSelected={selectedTopic && selectedTopic.id === tab.id}
                            onSelect={() => handleSelect(index)}
                        >
                            {tab.name}
                        </TabButton>
                    ))}
                </menu>
                <div className="sandbox__examples-content">
                    <h3>{selectedTopic.name}</h3>
                    <p>{selectedTopic.description}</p>
                </div>
            </section>
        </main>
    );
}

export default Sandbox;
