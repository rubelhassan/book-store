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
