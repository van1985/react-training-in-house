In JavaScript to create an element we use to do something like this:

```
var newNode = document.createElement("div");
var contentNode = document.createTextNode("Understanding JSX");
newNode.appendChild(contentNode);
```

However React works differently, React works with **Virtual DOM** which is the local and simplified copy of the **HTML DOM**. In order to create a component in React we use _React.createElement()_ which is used to define the DOM nodes to output. For example the following code:

```
class HelloJSX extends React.Component {
    render() {
        return(
            React.createElement(
                "div",
                { "className" : "wrapper" },
                React.createElement(
                    "div",
                    { "className" : "wrapper-content" },
                    "Understanding JSX"
                );
            );
        );
    }
}
```

This will render this HTML

```
<div class="wrapper">
    <div class="wrapper-content">Understanding JSX</div>
</div>
```

_React.createElement()_ works fine, but we can do more elegant, here is when **JSX** _(JavaScript XML)_ appears, **JSX** is an markup language similar to HTML, it means that each **JSX** node maps to a JavaScript function, so instead of calling _React.createElement()_, we can use **JSX** to make the code look similar HTML, let's see following code.

```
class HelloJSX extends React.Component {
    render() {
        return(
            <div classname="wrapper">
                <div classname="wrapper-content">Understanding JSX</div>
            </div>
        );
    }
}
```

**JSX** takes the following line

```
<div classname="wrapper-content">Understanding JSX</div>
```

and it compiles into

```
React.createElement("div", { "className" : "wrapper-content" }, "Understanding JSX");
```

As you can see JSX expressions become JavaScript objects. There is other advantage with JSX, we can use if statements and also for loops, also we can assign variables, accept it as arguments and return it from functions.  

You should consider some things to use JSX:

- JSX is optional
- JSX needs a transcompiler or transpilier which is a type of compiler that takes the source code of a program written in one programming language as input and produces the it is equivalent source code in another programming language.