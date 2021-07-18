import React from "react";
import ReactDOM from "react-dom";

function Book(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <b>${props.price}</b>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Welcome to Book Store"),
    React.createElement(Book, {
      title: "You Don't Know JS Yet: Get Started",
      author: "Kyle Simpson",
      price: 18.95,
      description:
        "Get Started prepares you for the journey ahead, first surveying the language then detailing how the rest of the You Don't Know JS Yet book series guides you to knowing JS more deeply.",
    }),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
