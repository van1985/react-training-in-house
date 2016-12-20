# Introduction

React Router is a powerful library built on top of React that makes routing in your app really simple.

# Installing React Router

To install React Router in your project:
```
$ cd /your/project/folder/spath
$ npm install --save react-router
```

# Creating a router

React Router main component is called `Router` which usually contains `Route` components.

```js
//index.js

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './views/app'
import About from './views/about'
import Contact from './views/contact'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Router>
, document.getElementById('app'))
```
```js
//views/app.js

import React from 'react'

export default class App extends React.Component {
  render() {
    return <h1>App</h1>
  }
}
```
```js
//views/about.js

import React from 'react'

export default class About extends React.Component {
  render() {
    return <h1>About</h1>
  }
}
```
```js
//views/contact.js

import React from 'react'

export default class Contact extends React.Component {
  render() {
    return <h1>Contact</h1>
  }
}
```
In this example we are setting our `Router` component with 3 different routes: `/`, `/about` and `/contact`. Each `Route` component associates these paths with their respective component: `App`, `About` and `Contact`.

# Basic navigation

In the previous example we can only access these routes by typing their path on the browser. React Router provides a simple way to navigate within our app, through the `Link` component. <Link> is similar to using an html anchor tag.

Lets make two links that point to About and Contact in our App component

```js
//views/App.js
import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <div className="nav">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}
```

# Nested Routes

React allow us to nest Components through parent-child hierarchy, and React Router is not the exception, we can reuse our UI elements by nesting `Route` components inside the `Router` and using react's `this.props.children` inside the parent route UI component.

```js
//index.js

//...
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
, document.getElementById('app'))
```
```js
//app.js

//...
render() {
    return (
      <div>
        <h1>App</h1>
        <div className="nav">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {this.props.children}
      </div>
    )
  }

```
Now, our About and Contact views will be rendered like this:

```
<App>                   <App>
  <About/>                <Contact/>
</App>                  </App>
```

# Route Parameters

We can easily set and handle route parameters by adding `:parameter_name` to our `Route` component `path` prop. React Router will pass this parameter to the UI component associated with the route as a prop named `params`.
Lets add some parameters to our About route:

```js
//index.js

//...
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about/:userName/:age" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
, document.getElementById('app'))
```
```js
//views/about.js

//...
render() {
    const { userName, age } = this.props.params
    const description = `My name is ${username} and I'm ${age} years old.`
    return (
        <div>
            <h1>About</h1>
            <p>{description}</p>
        <div>
    )
}
```

---
