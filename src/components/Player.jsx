import { useState, useRef } from "react";
export default function Player() {
  const playersName = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playersName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playersName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
