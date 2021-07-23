import ReactDOM from "react-dom";
import BookShelf from "./components/BookShelf";
import BrowsePanel from "./components/BrowsePanel";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <>
      <TopNav />
      <main>
        <BrowsePanel />
        <BookShelf />
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
