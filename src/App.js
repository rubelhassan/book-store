import ReactDOM from "react-dom";
import BookShelf from "./components/BookShelf";
import BrowsePanel from "./components/BrowsePanel";
import Cart from "./components/Cart";
import TopNav from "./components/TopNav";

import mockServer from "./server/Server";

if (process.env.NODE_ENV === "development") {
  mockServer();
}

const App = () => {
  return (
    <>
      <TopNav />
      <main>
        <BrowsePanel />
        <BookShelf />
        <Cart />
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
