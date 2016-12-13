# Props

## Overview

Properties are all the inputs that a component can receive and later used to decide what will be rendered.
They can be of any valid JavaScript type.
Properties have an **important rule** that we need to follow.
This rule is that **properties are read only**, meaning that they shouldn't be modified inside the component that is consuming them.

Since in the end React components are functions this could also be described as the component being a pure function which means that they don't change its inputs and given the same set of inputs they always return the same result.

## Example

```
    
        function HelloComponent (props) {
            return Hello {props.name}
        }
    
```

As you can see the properties of a component are stored in the props parameter.
In this case we are only interested in a property called **name** that we want to display.

## Components properties

As we mentioned, a component can receive properties, which will modify its behavior depending on what value is provided.
All component properties should be defined into a properties definition called **propTypes**.
This definition is defined within our component definition and it is used for properties validation.
We will take a deeper look into properties validation and properties types in the next topic.

To define our component propTypes we should writhe the following

```
    
        class MyComponent extends React.Component { ... };

        MyComponent.propTypes = {
            name: React.PropTypes.string
        };
    
```

Now that we know how to use properties inside our component you might be wondering how to pass them from outside and it is really simple, it is just like using attributes in HTML tags.

## Using properties

As we mentioned before, we can modify our component behavior providing different values for specific and defined properties.
Let's suppose that we have the following component which has two flavors, one is dark and the other bright.

```
    
        class MyComponent extends React.Component {
            render () {
                return (
                    <div>
                        {this.props.children}
                    </div>
                );
            }
        };

        MyComponent.propTypes = {
            type: React.PropTypes.oneOf(['dark', 'bright']);
        };
    
```

To render different types of our component we can render it from other component as the following

```
    
        render () {
            return (
                <div>
                    <mycomponent type="dark">
                    <mycomponent type="bright">
                </mycomponent></mycomponent></div>
            );
        }
    
```

## Default Props

As you defined your properties definition, you cna also define which are the default values for each of them.
This values will be used in case the consumer of your components doesn't provide you an initial value.
This values are defined as the following

```
    
        class MyComponent extends React.Component { ... };

        MyComponent.propTypes= {
            type: React.PropTypes.oneOf(['dark', 'bright'])
        };

        MyComponent.defaultProps = {
            type: 'dark'
        };
    
```

So when you write down the previous example but without the type property you'll have the exact same result

```
    
        render () {
            return (
                <div>
                    <mycomponent>
                    <mycomponent type="bright">
                </mycomponent></mycomponent></div>
            );
        }
    
```