# Update State

## setState()

```javascript
setState(nextState, callback)
```
setState() method is used for updating the state of the component. This method will not replace the state but only add changes to original state. This is the primary method you use to trigger UI updates from event handlers and server request callbacks.

The first argument can be an object (containing zero or more keys to update) or a function (of state and props) that returns an object containing keys to update.

Here is the simple object usage:

```javascript
this.setState({mykey: 'my new value'});
```

It's also possible to pass a function with the signature function(state, props) =\> newState. This enqueues an atomic update that consults the previous value of state and props before setting any values. For instance, suppose we wanted to increment a value in state by props.step:

```javascript
this.setState((prevState, props) => {
  return {myInteger: prevState.myInteger + props.step};
});
```

The second parameter is an optional callback function that will be executed once setState is completed and the component is re-rendered. Generally we recommend using componentDidUpdate() for such logic instead.

setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value.

There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.

setState() will always lead to a re-render unless shouldComponentUpdate() returns false. If mutable objects are being used and conditional rendering logic cannot be implemented in shouldComponentUpdate(), calling setState() only when the new state differs from the previous state will avoid unnecessary re-renders.

### Example:

```javascript
class App extends React.Component {
   constructor() {
      super();
      this.state = { data: [] }
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      var myArray = this.state.data;
      myArray.push("setState...")
      this.setState({data: myArray})
   };

   render() {
      return (
         <div>
            <button onclick="{this.setStateHandler}">SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

export default App;
```

We started with empty array. Every time we click the button, the state will be updated. If we click it five times, we will get the following output.

![][1]

## forceUpdate()

```javascript
component.forceUpdate(callback)
```

Sometimes you want to update the component manually. You can achieve this by using forceUpdate() method.

By default, when your component's state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes.

Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

### Example:

```javascript
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler() {
    this.forceUpdate();
  };

  render() {
    return (
      Random number: {Math.random()}
    );
  }
}

export default App;
```

We are setting random number that will be updated every time the button is clicked.

![][2]

## Find Dom Node

```javascript
ReactDOM.findDOMNode(component)
```
If this component has been mounted into the DOM, this returns the corresponding native browser DOM element. This method is useful for reading values out of the DOM, such as form field values and performing DOM measurements. **In most cases, you can attach a ref to the DOM node and avoid using `findDOMNode` at all.** When `render` returns `null` or `false`, `findDOMNode` returns `null`.

**Note**

`findDOMNode` is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.

`findDOMNode` only works on mounted components (that is, components that have been placed in the DOM). If you try to call this on a component that has not been mounted yet (like calling `findDOMNode()` in `render()` on a component that has yet to be created) an exception will be thrown.

`findDOMNode` cannot be used on functional components.

### Example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }

  render() {
    return (
      NODE
    );
  }
}
```
export default App;
The color of myDiv element is changed to green, once the button is clicked.

![][3]

### unmountComponentAtNode()

```javascript
ReactDOM.unmountComponentAtNode(container)
```

Remove a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns `true` if a component was unmounted and `false` if there was no component to unmount.


# Class Properties

## defaultProps

defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props. For example:

```javascript
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

If props.color is not provided, it will be set by default to 'blue':
```javascript
  render() {
    return  ; // props.color will be set to blue
  }
```

If props.color is set to null, it will remain null:

```javascript
  render() {
    return  ; // props.color will remain null
  }
```

## displayName

The displayName string is used in debugging messages. JSX sets this value automatically; see JSX in Depth.

## propTypes

propTypes can be defined as a property on the component class itself, to define what types the props should be. It should be a map from prop names to types as defined in React.PropTypes. In development mode, when an invalid value is provided for a prop, a warning will be shown in the JavaScript console. In production mode, propTypes checks are skipped for efficiency.

For example, this code ensures that the color prop is a string:

```javascript
class CustomButton extends React.Component {
  // ...
}

CustomButton.propTypes = {
  color: React.PropTypes.string
};
```

We recommend using Flow when possible, to get compile-time typechecking instead of runtime typechecking. Flow has built-in support for React so it's easy to run static analysis on a React app.

# Instance Properties

## props

this.props contains the props that were defined by the caller of this component. See Components and Props for an introduction to props.

In particular, this.props.children is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.

## state

The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.

If you don't use it in render(), it shouldn't be on the state. For example, you can put timer IDs directly on the instance.

See State and Lifecycle for more information about the state.

Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.

[1]: https://www.tutorialspoint.com/reactjs/images/react-component-api-set-state.jpg
[2]: https://www.tutorialspoint.com/reactjs/images/react-component-api-force-update.jpg
[3]: https://www.tutorialspoint.com/reactjs/images/react-component-api-find-dom-node.jpg
