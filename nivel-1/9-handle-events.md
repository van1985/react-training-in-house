# Handle Events

# Overview

Handling events with React elements is very similar to handling events on DOM elements.
There are some syntactic differences:

 - React events are named using camelCase, rather than lowercase.
 - With JSX you pass a function as the event handler, rather than a string.
 - You cannot return false to prevent default behavior in React, you must call preventDefault explicitly.

 When using React you should generally not need to call addEventListener to add listeners to a DOM
 element after it is created. Instead, just provide a listener when the element is initially rendered.

## Examples

###  ES6 class (we recommend):

```

 class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { counter: 0 }

        // You need to bind this
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    increaseCounter() {
        this.setState(prevState => ({
          counter: (counter++)
        }));
    }

    decreaseCounter() {
        this.setState(prevState => ({
          counter: (counter--)
        }));
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
            { counter}
            <button onClick={this.increaseCounter}> + </button>
            <button onClick={this.decreaseCounter}> - </button>
            </div>
        )
    }

 }

```

### Using React Create class

```
const Counter = React.CreateClass({

    getInitialState() {
        return { counter: 0 }
    },

    increaseCounter() {
        this.setState(prevState => ({
          counter: (counter++)
        }));
    }

    decreaseCounter() {
        this.setState(prevState => ({
          counter: (counter--)
        }));
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
            { counter}
            <button onClick={this.increaseCounter}> + </button>
            <button onClick={this.decreaseCounter}> - </button>
            </div>
        )
    }
});

```

### You also could do an arrow function

```
 <button onClick={(e) => this.increaseCounter(e)}> + </button>

```

and not bind on the constructor, but the problem with this syntax is that a different callback is created each time the Counter renders.
In most cases, this is fine. However, if this callback is passed as a prop to lower components,
those components might do an extra re-rendering. We generally recommend binding in the constructor
to avoid this sort of performance problem.

## Handling Events in a Child Component

```

 class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { counter: 0 }

        // You need to bind this
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    increaseCounter() {
        this.setState(prevState => ({
          counter: (counter++)
        }));
    }

    decreaseCounter() {
        this.setState(prevState => ({
          counter: (counter--)
        }));
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
            { counter}
            <DecoratedButton clickHandler={this.increaseCounter} label='+' />
            <DecoratedButton clickHandler={this.decreaseCounter} label='-' />
            </div>
        )
    }

 }

 class DecoratedButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { clickHandler, label } = {this.props}
        <button onClick={clickHandler}> {label} </button>
    }

}

```
