# Building a Book Store with React (Step by Step Tutorial)

## Write Your First React Componet with Zero Setup

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

[JSX](https://reactjs.org/docs/introducing-jsx.html) a syntax extension to JavaScript offered by React. JSX looks like HTML and act like JavaScript. Sounds funny right? React separates concerns with loosely coupled units called "components" where both UI elemnts and logic (events, state, data etc.) can reside together as we've seen a bit earlier. And JSX helps here to visualize UI inside JavaScript code and most people find it helful. Below is a simple JSX element.

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

## Integrating Few JS Tools

What we've done so far is fine for learning and creating simple demos. However, using React like this makes our website slow and isn't siutable for production.In addition, real-life projects are more complex and hard to maintain. So we need to use tools that will make our life easier writing and delivering production-reay code.
