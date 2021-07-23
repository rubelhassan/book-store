import ReactDOM from "react-dom";
import BookShelf from "./components/BookShelf";
import BrowsePanel from "./components/BrowsePanel";
import Cart from "./components/Cart";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <>
      <TopNav />
      <main>
        <BrowsePanel />
        <BookShelf />
        <Cart isOpen={false} />
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
