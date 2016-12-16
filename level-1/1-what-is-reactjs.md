![React][1]

Is a UI library developed to facilitate the creation of interactive, stateful & reusable UI components.
One of it's unique points is that not only does it perform on the client side, but it can also be rendered server side, and they can work together inter-operably.  
The Virtual DOM concept its one of the most interesting features in react, that renders subtrees of nodes based upon state changes. It does the least amount of DOM manipulation possible in order to keep your components up to date.

# Virtual DOM

React runs a "diffing" algorithm, which identifies what has changed. The second step is reconciliation, where it updates the DOM with the results of diff then it only modifies the part that have been change

![][2]

# One way data flow

React is designed in such a manner that it will only support data that is flowing downstream, in one flow. If the data has to flow in another direction, you will need additional features. The reason behind this is because components are supposed to be immutable and the data within them unable to change. This way, they will only listen to data that is flowing from upstream and not data that is coming from each other. That is why React.js is known for the creation of canonical data sources that will stay synchronized across the components that will pay attention to it. It is what makes it the best framework for creating highly interactive web applications.

If a certain change is made on the data upstream, the components using that particular data will automatically re-render in order to reflect the changes. That is why they have to remain in synch with the data that is flowing downstream

![][3]

# JSX

This is a language that is more or less like XML language. You do not have to use React.js with JSX but JSX language is a much preferable choice for many web developers as it is a short hand that makes it easy, whenever they are writing markup for components as well as when they are binding events. Web developers will always go for an easy way out, which is why this is a great choice for many.

[1]: http://staltz.com/dont-react/img/reactlogo.png
[2]: http://toobler.com/blog/wp-content/uploads/2015/06/reactjs-virtual-dom-real-dom.jpg
[3]: http://image.slidesharecdn.com/2015-150409045423-conversion-gate01/95/react-tech-salon-11-638.jpg?cb=1428560032