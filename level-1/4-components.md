# Components

Components are user interface elements that display data as it changes over time.
A React application is basically a collection of components that are composed together, nested inside of one another to create entire user interfaces.  

### Let's create our first component:

In our main html file, inside our ```<body>``` tag, let's add a div with id content: ```<div id="content"></div>``` in which React will render our component.

Then let's define our component, which is just a pure function, that accepts name and lastname properties from the props object as arguments, and returns a String, with the property name of the props object.


```javascript
const Greeting = ({name, lastname}) => <p>Welcome {name} {lastname}</p>
```

Notice that 
```javascript
<h1>Hello {props.name}</h1>
```
 will be our "render method", which is not a method anymore, it's the component function itself.

Let's create our props object, with the property "name":

```javascript
const props = {
  name: 'Scarlett',
  lastname: 'Johansson'
}
```

And the last step, is render the component to our page, so will we use [ReactDom](https://facebook.github.io/react/docs/react-dom.html) library, which is the glue between React and the DOM, then we will call the render function of ReactDom, which accepts two things, our Greeting component ```<Greeting {...props} /> ```, in which we will use the es6 spread operator ```...props ``` using props spreads each key in the object, and passes it to Greeting component as an individual property.
The second thing that accepts our render function is where I want to place this in the DOM, in our case will be ```<div id="content"></div>``` so we will use ```document.getElementById('content') ``` 


```javascript
ReactDOM.render( <Greeting {...props} />, document.getElementById('content'));
```

As we said before, we can compose components together, so let's create another component.

Let's call the new component: ```MyTitle ```

```javascript
const MyTitle = () => <h1>Welcome to React</h1>
```

Then let's modify our Greeting component in order to place our new component inside it.

```javascript
const Greeting = ({name}) => {
  return (
    <div>
      <MyTitle />
      <p>Hi {name}</p>
    </div>
  )
}
```

Here are a couple of things worth to mention.
Notice that we add and encircling ```<div></div>``` wrapping our component, and this is because, you can't have your ```Greeting``` component be equal to a bunch of different elements, you have to have your component be equal to one thing, in this case, the div element, and the div have a bunch of children.

### Remember
You have to have one top element or an enclosing div, for any sort of component.  

The other new thing here, is the parenthesis after the return method, and this because we want to do this on multiple lines.

Notice that our components could be used as many times as we desire to use them.