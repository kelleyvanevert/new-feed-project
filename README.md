# Class 43 - React day 2 warmup

## Recap of yesterday

**react**

- open source js library for building user interfaces

**keeping your codebase dry by splitting it up into reusable pieces**

- ```jsx
  import data from "./data.json";
  import Title from "./components/Title";
  ```

**map**

- method that creates a new array with the results of calling the function on each element in the array

  ```jsx
  ["Elsie", "Heleen", "Kelley"].map((name) => {
    return <li>{name}</li>;
  });
  ```

  ~~> evaluates to ~~>

  ```jsx
  [<li>Elsie</li>, <li>Heleen</li>, <li>Kelley</li>];
  ```

  just like `4 + 5` ~~> evaluates to ~~> `9`

**html**

- `<ul>` / `<ol>` unordered list, ordered list
- `<li>` list item
- and more...

**interpolation**

- taking javascript data and turning/putting it into jsx

**conditional rendering**

- because booleans don't show up, we need to use an if statement or a ternary operator

**props and components**

- component is a blueprint for a part of a website which can be placed on several different places of a website, with different props
- props are data which can be placed inside components
- component is just a function
- definition v instance of components
- imagine you're going to build up your app with these components

**css flexbox**

- use it to put two divs next to each other
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/

**bootstrap and scss (and maybe css grid)**

- bootstrap is a library, css written by other people that you can use
- scss is actually a language
- css grid is like flex, but then for two dimensional positioning

**github**

- a place to place your project repo's online and share them with your project partners / colleagues

## Today

**What is state?**

- it's like an attribute of your component
- state is associated data, can change over time
- it's "remembered changeable data"

Typical example:

```jsx
export default function CounterButton() {
  console.log("render: CounterButton");

  // remember: how many times
  //  was this button clicked on ?
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        console.log("did I get called?");
        setCount(count + 1);
      }}
    >
      Clicked: {count}
    </button>
  );
}
```

### HTML vs JSX vs DOM

**HTML**

- is the "language" / "syntax",
- _"this file (e.g. `about.html`) is an html file"_

**JSX**

- is a javascript expression (which turns into a javascript object) which "describes" html, for example:

  ```jsx
  <div className="person">{name}</div>
  ```

- you write JSX in React components
- you can interpolate JS values into it, etc.

**DOM**

- the actual "living breathing document" (_document object model_) on the website you're looking at

**How react renders your components**

- We describe what we _want to see_ with JSX:

  ```jsx
  function App() {
    return <div>hello</div>;
  }
  ```

- React calls your function to get this "virtual DOM" description

- React compares this "virtual DOM" to the actual DOM, and adds/changes/removes DOM to make it look like what we want
