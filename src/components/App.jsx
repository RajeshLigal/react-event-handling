import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");

  const [isMouseOver, setMouseOver] = useState(false);

  const [name, setName] = useState("");

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    //this allows to prevent the default functon fo the form
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      {/* form default value refresh the page when button is clicked */}
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          //in react the value should be set from the event target
          //in react it is called Controlled Components
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
