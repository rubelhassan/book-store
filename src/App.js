import ReactDOM from "react-dom";
import Book from "./components/Book";

function App() {
  return (
    <div>
      <h1>Welcome to Book Store</h1>
      <Book
        title="You Don't Know JS Yet: Get Started"
        author="Kyle Simpson"
        price="18.95"
        description="Get Started prepares you for the journey ahead, first surveying the language then detailing how the rest of the You Don't Know JS Yet book series guides you to knowing JS more deeply."
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
