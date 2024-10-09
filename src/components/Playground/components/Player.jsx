import React, { useState } from 'react';

function Player({ initalName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initalName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let info = (
    <span className="player">
      <span className="player-name">{playerName}</span>
      <span className="player-symbol">{symbol}</span>
    </span>
  );

  const editing = <input type="text" required={true} value={playerName} onChange={handleNameChange} />;

  const button = (
    <button onClick={() => handleEditClick()} className="edit-button">
      {isEditing ? 'Save' : 'Edit'}
    </button>
  );
  return (
    <li className={isActive ? 'active player-item' : 'player-item'}>
      {isEditing ? editing : info}
      {button}
    </li>
  );
}

export default Player;
