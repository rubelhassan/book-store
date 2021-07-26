import ReactDOM from "react-dom";
import BookShelf from "./components/BookShelf";
import LeftPanel from "./components/LeftPanel";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <>
      <TopNav />
      <main>
        <LeftPanel />
        <BookShelf />
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
