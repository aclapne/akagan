import React, { useState } from 'react';
import { Tab_Content } from './TabButton/TabContent.js';
import './Sandbox.css';
import Section from './Section.jsx';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(Tab_Content[0]);

  function handleSelect(index) {
    setSelectedTopic(Tab_Content[index]);
  }

  return (
    <Section className="examples" title="Examples">
      <div className="examples-buttons">
        {Tab_Content.map((tab, index) => (
          <button
            key={tab.id}
            className={`example-button ${selectedTopic.id === tab.id ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="examples-content">
        <h3>{selectedTopic.name}</h3>
        <p>{selectedTopic.description}</p>
      </div>
    </Section>
  );
}

export default Examples;
