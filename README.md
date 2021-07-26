# Building a Book Store with React (Step by Step Tutorial)

# Run with Pure React

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

Now you should see "Welcome to Book Store" on you browser. Voila! the simplest React app you've just built.
