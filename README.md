# Building a Book Store with React (Step by Step Tutorial)

## Write Your First Vanilla React Component with Zero Setup

Let's crate a project directory `book-store`. Create `index.html` file under the `src/` directory. And add `style.css` too in the same directory.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
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

### Webpack

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

Create a file `.babelrc` on the root directory with following content to tweak default preset for Babel as it's not set by Parcel yet.

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
