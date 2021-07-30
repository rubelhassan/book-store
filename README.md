# Building a Book Store with React (Step by Step Tutorial)

## Write Your First Vanilla React Component with Zero Setup

Let's crate a project directory `book-store`. Create `index.html` file under the `src/` directory. And add `index.css` too in the same directory.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Book Store</title>
  </head>
  <body>
    <div id="root">
      Welcome to Book Store (Please enable javascript from your browser)
    </div>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script>
      // we will render page using React here in next step
    </script>
  </body>
</html>
```

In the above html document I have taken a standard HTML5 document. I've added a div with id `root` and two CDN links for `React` and `ReactDOM` scripts. In the very end I've added another script tag where we'll be writing code for our app.

Inside the last script tag, put below code.

```javascript
function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Welcome to Book Store")
  );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

`createElement` is a top level function of React which create and return new React element.

```javascript
React.createElement(type, [props], [...children]);
```

Now let's create a `Book` component as a child of `App` component.

```javascript
function Book(props) {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.title),
    React.createElement("h3", {}, props.author),
    React.createElement("b", {}, "$" + props.price),
    React.createElement("p", {}, props.description),
  ]);
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
```

The `Book` component is reusable and flexible that takes `props` from parent to render itself.

So far so good. You can create and render React components. Hooray!

## Quick Introduction to JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html) a syntax extension to JavaScript offered by React. JSX looks like HTML and act like JavaScript. Sounds funny right? React separates concerns with loosely coupled units called "components" where both UI elements and logic (events, state, data etc.) can reside together as we've seen a bit earlier. And JSX helps here to visualize UI inside JavaScript code and most people find it helpful. Below is a simple JSX element.

```jsx
const element = <h1>Hello, {name}</h1>;
```

To try out JSX instantly, let's add this before the last `<script>` tag at `index.html`.

```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Now change the type of last `<script>` tag to `text/babel` and replace the `Book` component with this.

```jsx
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
```

Now you should clearly see the differences between native React components vs JSX. Cleaner and easy to read, isn't it?

If you interested to see what it looks like when JSX is transformed to React components, visit this [link](https://babeljs.io/repl).

## Integrating Few JS Tools

What we've done so far is fine for learning and creating simple demos. However, using React like this makes our website slow and isn't siutable for production.In addition, real-life projects are more complex and hard to maintain. So we need to use tools that will make our life easier writing and delivering production-reay code.

### npm

npm is a package manager for JavaScript. npm registry has copious code packages that are written and open-sourced by developers around the world. Using npm, you can pull useful code packages directly to your project. So you don't need to reinvent the wheel always, but before using any npm package please be aware of the following - popularity, maturity, actively maintained, test coverage, licence , and last but not least is it worth for your usecase.

Follow this [link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install npm cli in your local environment. In order to start an npm project, run `npm init -y` from the terminal at the root of your project.

### Prettier

To maintain code readability is very important while writing a program as it helps other to easily visualize the intention behind the code. Proper syntax and consistent style play a major role to increase code readability. Prettier is an opinionated code formatter that takes your code, removes all original styling, and ensures that all outputted code conforms to a consistent style. Automatic code formatting also help to concentrate more on other important aspects of development (logic, architecture etc.) without worrying about style of code.

To install prettier locally, run following command from the root directory of your project. Here, `-D` means for development only, npm will not ship prettier to production build.

```shell
npm install -D prettier
```

Also run following command which will create an empty config file to let editors and other tools know you are using Prettier.

```shell
echo {}> .prettierrc.json
```

Now you can add the following to your `package.json` that will let you run format all the files of your projects with `js,jsx,json` extensions at once using `npm run format`. _This is optional._

```json
"scripts": {
	"format": "prettier --write \"src/**/*.{js,jsx,json}\""
},
```

Visit this [link](https://prettier.io/docs/en/install.html) to know about configuring Prettier Your editor may have extension for Prettier. If you're using VS Code you can install [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to delegate responsibility to editor.

### ESLint

ESLink takes responsibility where Prettier leaves, it concerns more about quality of your JavaScript code. ESLint will find syntax-aware problems in your code and suggest fixes.

Installation

```shell
npm install -D eslint
```

As we're using ESLint with Prettier, to make them nice with each other install following package.

```shell
npm install -D eslint-config-prettier
```

There are many preset config for ESLint, we're going to use the default configuration that comes with ESLint.

> Prettier for formatting and ESLint for catching bugs!

Create a file named `.eslintrc.json` in the root directory of your project with the following content.

```json
{
  "extends": ["eslint:recommended", "prettier"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

Always keep "prettier" as the last element of "extends" array in your .eslintrc.\* file, so that it gets the chance to override other configs.

Add the following at the end of `"scripts"` at `package.json`.

```json
"scripts" {
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet"
}
```

Now you can run `npm run lint` to check any linting errors, we'll see errors as currently we don't have any js/jsx file in our project. You can also run `npm run lint -- --fix` to fix if there are any errors.

### Webpack/Parcel

Webpack is a static module bundler for modern JavaScript applications. But for easy to setup we'll be using Parcel until the end of development.

Install parcel

```shell
npm install -D parcel
```

Define parcel starting point.

```json
"scripts" {
  "app": "parcel src/index.html"
}
```

If everything is ok, you'll able to run the app using `npm run app`. As we've used `jsx` in `index.html`, they need to be transformed to React component, so build will fail.

Now remove all the scripts link from `index.html` and move all code from inside the last `script` tag to `App.js` file. `index.html` file should have only one script dependency like below.

```shell
<script src="App.js"></script>
```

You will see import error as we've remove react and react-dom cdn links.Let's install react and react-dom using npm.

```shell
npm install react react-dom
```

Put below code on the top of `App.js` file

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

Now run the command `npm run app` and you should see the app up and running without any error.

Let's refactor vanilla components to JSX and organize folder structure. Move `Book` component to `component\Book.js`.

```javascript
import React from "react";

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

export default Book;
```

And move rest of the code from `index.html` to `App.js` on the root directory.

```javascript
import React from "react";
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
```

You may have noticed that we need to import `React` on every file that contains JSX but we're not using it directly. And eslint is complaining about that. Let's fix it by installing following packages.

```shell
npm install -D eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

Change `eslintrc.json` like below.

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

From React 17, [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) has been introduced. With the new transform, you can use JSX without importing React.

### Babel

Create a file `.babelrc` on the root directory with following content to tweak default preset for Babel as it's not set by Parcel(at the time of writing) yet.

```json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

Now remove React imports on top of any functional components and rerun the project. Everything should work fine as before.

We've done setting up everything so far. At this stage we will focus on writing static components. To make the components look better we'll need styles. For simplicity we're using pure css in a monolithic file, you can copy them from `src/index.css` from this repo. Also, copy all the contents `src/static` path to your project.

## Components and Props

React is component-based JavasSript library. Component is an independent and reusable pieces of code, more like JavaScript function. Components manage their own states and multiple components can be composed to a single compound component to make complex UIs.

There are two types of components - class components and functional components. As functional components has become almost of a standard, we'll will be using functional components mostly in this project.

> We're going to write our code in ES6

In this section we'll be writing static components, later we will add behavior to these components. Let's create a folder `src/components` where we will keep all components. Let's write a component `TopNav` that will render top navigation panel of our book store app.

```javascript
const TopNav = () => {
  return (
    <nav>
      <div className="logo">
        <b>Book Store</b>
      </div>
      <div className="search-container">
        <input
          id="search"
          type="text"
          placeholder="Search by book name, author"
        />
        <button type="submit" className="btn-search">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
```

Now import this component in `App` component. `App.js` should look like below.

```javascript
import ReactDOM from "react-dom";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <>
      <TopNav />
      <main></main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

You should see the update on UI. Lets add another component `BrowsePanel` which will show available `categories` and `authors` to browse for books.

```javascript
const BrowsePanel = () => {
  return (
    <section className="sidebar-nav">
      <div className="category card book-scroll">
        <h5 className="card-header">Categories</h5>
        <span className="divider"></span>
        <ul>
          <li>
            <span>Novel</span>
          </li>
          <li>
            <span>Programming</span>
          </li>
          <li>
            <span>Nonfiction</span>
          </li>
        </ul>
      </div>
      <div className="author card book-scroll">
        <h5 className="card-header">Author</h5>
        <span className="divider"></span>
        <ul>
          <li>
            <span>Rabindranath Tagor</span>
          </li>
          <li>
            <span>Kyle Simpson</span>
          </li>
          <li>
            <span>Humayun Ahmed</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BrowsePanel;
```

Inside of `main` element in `App.js` add `BrowsePanel` component.

```javascript
<main>
  <BrowsePanel />
</main>
```

We just need another component to show list of books that are available to sell. Before creating that let's refactor the `Book` component like below.

```javascript
const Book = () => {
  return (
    <div className="book-card card">
      <div className="book-info">
        <div className="book-tag-discount">
          <b>5%</b> Discount
        </div>
        <div className="book-card-image">
          <img
            src={require("url:../static/books/1.jpg")}
            alt="You Don't Know JS Yet: Get Started"
          />
        </div>
        <p className="book-title">{"You Don't Know JS Yet: Get Started"}</p>
        <span className="book-author">Kyle Simpson</span>
        <div>
          <div className="book-card-price">
            <span className="price-original">
              <small>৳</small>220
            </span>
            <span className="price-discount">
              <small>৳</small>199
            </span>
          </div>
        </div>
      </div>
      <div className="btn-buy">Add to cart</div>
    </div>
  );
};

export default Book;
```

Now add `BookShelf` components to hold all the `Book` components.

```javascript
import Book from "./Book.js";

const BookShelf = () => {
  return (
    <div className="books-container">
      <section className="books-header-section">
        <div className="books-count">
          <span>5 book(s) found.</span>
        </div>
        <div className="books-sort">
          <span>Order by: </span>
          <select className="card-select">
            <option>Select</option>
            <option value="price">Price: lowest to highest</option>
            <option value="date">Publish: latest to oldest</option>
          </select>
        </div>
      </section>
      <section className="books-card-section">
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
};

export default BookShelf;
```

At this point, your `App.js` file should look like below.

```javascript
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
```

We have added several components in our app so far and we can see static components (top navigation, browsing panel and list of books).

At the time of writing `BrowsePanel` component you may notice that we used identical html except few places where they vary to render Categories and Authors. Let's extract these duplicate code in a reusable component and make a room for adding new topics in future in this component.

So let's write a component named `BrowseTopic` and compose it in `BrowseTopic`.

```javascript
const BrowseTopic = ({ type, name }) => {
  return (
    <div className={`${type} card book-scroll`}>
      <h5 className="card-header">{name}</h5>
      <span className="divider"></span>
      <ul>
        {/* TODO: in-future load from props */}
        <li>
          <span>{type} one</span>
        </li>
        <li>
          <span>{type} two</span>
        </li>
        <li>
          <span>{type} three</span>
        </li>
      </ul>
    </div>
  );
};

export default BrowseTopic;
```

`BrowsePanel` should look like below:

```javascript
import BrowseTopic from "./BrowseTopic";

const BrowsePanel = () => {
  return (
    <section className="sidebar-nav">
      <BrowseTopic type="category" name="Categories" />
      <BrowseTopic type="author" name="Authors" />
    </section>
  );
};

export default BrowsePanel;
```

Notice that we passed `type` and `name` of BrowseTopic as `props` that varies in between them. React component accepts `props` as input, you can compare them like arguments in JavaScript function.

> React `props` are read-only. All React components must act like pure functions with respect to their props.

In our app a user can see the books that has been addet to cart and modify the cart as needed. So, let's create another two component name `Cart` to hold `CartItem`. We will will be modifying these components in future to make more modular.

`CartItem.js` is like below:

```javascript
const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-remove">
        <i className="fa fa-trash"></i>
      </div>
      <div className="cart-item-image">
        <img
          src={require("url:../static/books/1.jpg")}
          alt="You Don't Know JS Yet: Get Started"
        />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-title">
          {"You Don't Know JS Yet: Get Started"}
        </p>
        <p className="cart-item-author">
          <small>Yann Martel</small>
        </p>
        <p className="cart-item-quantity">
          <span>
            Quantity x <b>1</b>
          </span>
        </p>
      </div>
      <div className="cart-item-price">
        <div className="cart-item-change">
          <button className="btn-cart-item-change">-</button>
          <button className="btn-cart-item-change">+</button>
        </div>
        <span className="cart-item-price-total">
          <small>৳</small>199
        </span>
      </div>
    </div>
  );
};

export default CartItem;
```

`Cart.js` is like below:

```javascript
import CartItem from "./CartItem";

const Cart = () => {
  const cartOpen = false;
  return (
    <section className={cartOpen ? "cart cart-open" : "cart"}>
      {!cartOpen && (
        <div className="cart-trolley cart-closed">
          <button>
            <span className="cart-trolley-quantity">0</span>
          </button>
        </div>
      )}

      <div className="cart-content">
        <div className="close-cart">
          <button>
            <i className="fa fa-close fa-lg"></i>
          </button>
        </div>
        <div className="cart-header">
          <h5 className="header-title">Cart</h5>
          <span>(10 items)</span>
          <p className="divider"></p>
        </div>

        <div className="cart-items">
          {/* <p className="cart-empty">
              Add some products in the cart <br />
              :)
            </p> */}
          <CartItem />
        </div>

        <div className="cart-footer">
          <div className="total">
            <p>TOTAL</p>
          </div>
          <div className="total-price">
            <p className="total-price-val">
              <small>৳</small>10.00
            </p>
          </div>
          <div className="btn-buy reverse-accent">Checkout</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
```

We have `isOpen` props to pass in `Cart` which will indicate if the cart is opened or not. Let's integrate this component in `App.js`.

```javascript
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
        <Cart />
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

Now you should see a trolley icon on right-bottom corner on the UI.

## States and Events

So far, we've added all components as static, stateless, and interactions-less.

If see at the bottom-right corner of our app UI, you will see a button with trolley icon. We want to expand the cart menu upon click on this button. To achieve this we want to persist the state whether the cart is open or not.

Inside a functional component to track state React provides a `useState` hook which a simple JavaScript function that takes initial state of a variable and return an array - the first element is the initial value and the second element is a setter function. The setter function accepts new value as argument and allow to change the initial state. React tracks the value and the order of `useState` declaration inside a functional component. When you chanage the value inside a component with the setter function provided by `useState` hook, React just simply re-render the component with the new states.

Let's see `useState` in practice. Inside `Cart` component import `useState` hook with this line.

```javascript
import { useState } from "react";
```

Now replace the line `const cartOpen = false;` from `Cart` component with the line below.

```javascript
const [cartOpen, setCartOpen] = useState(false);
```

Here, we're defining a state with initial value `false` which is being return with as setter method, we just deconstructed the array elements in two variable named `carOpen` hold the value `false` and `setCartOpen` that let you change the state value. You can name them anything. So what we've done here is set the initial value of cart opening state as `false` that indicates that our cart is closed currently. And when the value is changed to `true` that will indicate that the cart is in open state. In the very begining of JSX, change like below

```javascript
<section className={cartOpen ? "cart cart-open" : "cart"}>
    {!cartOpen && (
    <div className="cart-trolley cart-closed">
        <button>
            <span className="cart-trolley-quantity">0</span>
        </button>
    </div>
    )}
```

Here we're checking if the current state of `cartOpen` is false then rendering the trolley icon with cart items quantity. Notice we've put the JSX inside a curley braces the block after `&&` will be evaluated only if the value of `cartOpen` is false.

> To learn further on `useState` hook [see here](https://reactjs.org/docs/hooks-state.html)

Now we can store state of a component. Let's see how we can state to make the cart open button interactive. Let's write a function to toggle the cart opening state when clicked on the cart icon.

```javascript
const toggleCart = () => {
  setCartOpen(!cartOpen);
};
```

Now we just need to call this function when user clicks on the button. React provides a [`onClick`](https://reactjs.org/docs/handling-events.html) event which is similar to DOM event `onclick`.

```javascript
return (
    <section className={cartOpen ? "cart cart-open" : "cart"}>
    {!cartOpen && (
    <div className="cart-trolley cart-closed">
        <button onClick={() => toggleCart()}>
        <span className="cart-trolley-quantity">0</span>
        </button>
    </div>
    )}

    <div className="cart-content">
    <div className="close-cart">
        <button onClick={() => toggleCart()}>
        <i className="fa fa-close fa-lg"></i>
        </button>
    </div>
...
);
```

Here we've added onClick event on cart close and cart open button where `toggleCart` will be called and the state will be change and React will re-render the `Cart` component with the change.

## Mock API

As we're developing a front-end application, we'll be mostly depending on back-end part of the application for exchanging data and business operation. We don't have any back-end service to work with right now. Sometimes, in-real development we will not have the back-end implementation beforehand, the back-end development may good hand in hand. What happens in this case backend and front-end teams agree upon on an API contract so that teams can work independently. Backend team will be involved developing real API that matches the initial contract. On the other hand, front-end team will start working on depending on the contract (mock API) and will replace with real-one when development finished.

Now we're going to prepare a mock API of our backend API using [MirageJS - API Mocking Library](https://miragejs.com/). Run `npm i -D miragejs` to install MirageJS as dev dependency.

Let's create directory `src/server/data` and copy `src/server/data/book.json` from this repository. Now, create a file `server/Server.js`. We initially introduce few endpoints to retrieve and search books in this mock api server, later we'll be adding more endpoints for different capabilities.

```javascript
import { createServer } from "miragejs";
import books from "./data/books.json";

export default function mockServer() {
  createServer({
    routes() {
      this.get("/api/books", () => {
        return {
          data: {
            total: books.length,
            books: books,
          },
        };
      });

      this.get("/api/books/:id", (schema, request) => {
        return {
          book: books[request.params.id],
        };
      });

      this.post("/api/books/search", (schema, request) => {
        const params = JSON.parse(request.requestBody);
        let matchedBooks = [];
        for (const book of books) {
          if (
            params.name &&
            book.name.toLowerCase().includes(params.name.toLowerCase())
          ) {
            matchedBooks.push(book);
            continue;
          }

          if (
            params.author &&
            book.author.toLowerCase().includes(params.author.toLowerCase())
          ) {
            matchedBooks.push(book);
            continue;
          }
        }

        return {
          data: {
            total: matchedBooks.length,
            books: matchedBooks,
          },
        };
      });
    },
  });
}
```

Now initialize the mock server in `App.js` like this.

```javascript
import mockServer from "./server/Server";

if (process.env.NODE_ENV === "development") {
  mockServer();
}
```

Before start testing if our mock server works let's create another file in `src/services` directory named `BookService.js`. This is where we'll be writing functions to retrieve data from different endpoints of mock api that are related to books only. The method `findBooks` can retrieve books from api using book name or author name.

```javascript
export class BookService {
  async findBooks(name, author) {
    const res = await fetch("api/books/search", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        author: author,
      }),
    });
    return await res.json();
  }
}
```

And another file named `AppService.js` under the same directory.

```javascript
import { BookService } from "./BookService";

export const bookService = new BookService();
```

We have created the `AppServer` to initialize single instance of every service, so that we don't need to create objects of the services all the time when we use them.

Now we have everything to test the mock api server. Let's add the following in `App.js` file after calling `mockServer()` and refresh the app you should see api response in the browser console.

```javascript
const searchBooks = (bookName) => {
  let result = bookService.findBooks(bookName);
  console.log("result", JSON.stringify(result));
  return result;
};

searchBooks("js");
```
