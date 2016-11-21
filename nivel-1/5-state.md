### Using state

When we build applications, we can agree with the idea that there's not app without data, and we can consider state as the management of such data.

React let us keep state in components, so let's create a Label component, composed with an input field and a label, that will display the text that we are typing in our input, in order to see state in action.

If we will use state in our component, we have to use ```createClass```

```javascript
const Text = React.createClass({})
```

Then, we will add our render method and inside it we will place our html.

```javascript
const Text = React.createClass({  
  render() {
    return ( 
      <div>
        <label>Acámica</label>
        <input type="text" />
      </div>
    )
  }
})
```


If you have any doubt about why we are using parenthesis after return or why we are using ```<div></div>``` wrapping our component, I strongly recommend to read our [Components course](https://www.acamica.com/lesson/3926/content).

Until now, we haven't add any state yet, so it's time to move forward with that.

Inside our component, let's add a method called ```getInitialState()``` which will returns an object, that will be our initial state of our component. The method will set a default string (Acámica) as the initial value of our text input:

```javascript
getInitialState () {
  return {
    text: 'Acamica'
  }
}
```

The next step is set to the value in our input field, the value of the text property of our state, and addittionaly let's add a label in order to print the current state.
```javascript
<label>{this.state.text}</label>
<input value={this.state.text} type="text" />
```

Until now, the entire component should be:

```javascript
const Text = React.createClass({
  getInitialState () {
    return {
      text: 'Acamica'
    }
  },  
  render() {
    return ( 
      <div>
        <label>{this.state.text}</label>
        <input value={this.state.text} type="text" />
      </div>
    )
  }
})  

``` 

If you're following this code step by step, don't forget to require React, and ReactDOM in your component file
```javascript
const React = require('react')
const ReactDOM = require('react-dom')
``` 

and call it from ```ReactDOM.render``` method, if you have any doubt about it, please check [Components course](https://www.acamica.com/lesson/3926/content) out.

If you're testing it in some editor, you can notice that your text input is displaying the text "Acámica", but if you want to delete or update it, the text field is broken, don't worry, you don't have an strange bug, the issue here is that everytime we type in our text input, React take the event and then fire off a re-render cycle, putting the value of the text property of the initial state, to the value of our text input, because we aren't binding the value of our text input to our state, so let's do that.

Let's create a new method called ```handleTextEvent (event)``` which will receive the ```onChange``` event of our input text, and will set to the text property of our state, the value of the input field.

```javascript 
handleTextEvent (event) {
  this.setState({
    text: event.target.value
  })
}
```

The final code will be:

```javascript
const Text = React.createClass({
  getInitialState () {
    return {
      text: 'Acamica'
    }
  },
  handleTextEvent (event) {
    this.setState({
      text: event.target.value
    })
  },
  render() {
    return ( 
      <div>
        <label>{this.state.text}</label>
        <input value={this.state.text} type="text" onChange={this.handleTextEvent} />
      </div>
    )
  }
})
``` 

If you want to play with this, check this [Codepen](http://codepen.io/andresfortinero/pen/VjGQqB)



