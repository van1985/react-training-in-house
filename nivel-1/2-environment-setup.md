# Introduction

One of the most intimidating aspect for the beginners about React is the tools (Babel, Webpack) and libraries around it.

In fact, these tools are not required to use React and but in order to get the most out of the features of ES6, JSX and bundling, we need them.

This section present two alternative configurations to start a project using React. The first one involve the configuration of Webpack and Babel but it preferable if you expect to use css processors or testing capabilities. The second one uses, *Create React App* which makes easier to start coding with react but decreases flexibility on the use of complementary technologies.

# Setting Up a React.js Environment Using Npm, Babel 6 and Webpack

## Project Initialization

Create a new folder 'react-hello-world' and initialize it with npm.

```
mkdir react-hello-world
cd react-hello-world
npm init
```

Accept the default for all the prompts

## Installing and Configuring Webpack

Webpack is a module bundler which takes modules with dependencies and generates static assets by bundling them together based on some configuration.![][1]

The support of loaders in Webpack makes it a perfect fit for using it along with React.

Install webpack using the following npm command

```
npm i webpack -S
```

Webpack requires some configuration settings to carry out its work. The best way is doing it via a config file called webpack.config.js. Create a file named webpack.config.js with the following content.

```javascript
var webpack = require('webpack');

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');

var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
```

The minimal requirement of a Webpack config file is the presence of entry and output properties.

The APP\_DIR holds the directory path of the React application's codebase and the BUILD\_DIR represents the directory path of the bundle file output.

Create the index.js file in the ./src/client/app and add the following code to verify this configuration.

```
console.log('Hello World!');
```

Now in the terminal run the following command

```
./node\_modules/.bin/webpack -d
```

The above command runs the webpack in the development mode and generates the bundle.js file and its associated map file bundle.js.map in the public directory.

Now, create an index.html file in the root directory and use it to use this bundle.js file

```
<html>
  <head>
    <meta charset="utf-8">
    <title>React.js using NPM, Babel6 and Webpack</title>
  </head>
  <body>
    <div id="app" />
    <script src="public/bundle.js" type="text/javascript"></script>
  </body>
</html>
```

Now if you open the browser, you can see the Hello World! in the console log.


### Setting Up Babel-Loader

Using JSX and ES6 can be more productive while working with React. But the JSX syntax and ES6, are not supported in all the browsers.

If we are using them in the React code, we need a Babel to translates them to the format that has been supported by the browsers. 
![image description][2]

In order to use Babel, install the following npm packages

```
npm i babel-loader babel-core babel-preset-es2015 babel-preset-react -S
```

The babel-preset-es2015 and babel-preset-react are plugins being used by the babel-loader to translate ES6 and JSX syntax respectively. babel-core is the main peace of the package.

babel-loader also requires some configuration. It's need to tell it to use the ES6 and JSX plugins.

Create a .babelrc file and update it as below


```
{
  "presets" : ["es2015", "react"]
}
```

The next step is telling Webpack to use the babel-loader while bundling the files

open webpack.config.js file and update it as below

```
// Existing Code ...
var config = {
  // Existing Code ...
  module: {
    loaders: [{
      test: /.jsx?/,
      include: APP_DIR,
      loader: 'babel'
    }]
  }
}
```

The loaders property takes an array of loaders. Each loader property should specify what are the file extension it has to process via the test property. babel-loader is configured it to process both .js and .jsx files using the regular expression. The include property specifies what is the directory to be used to look for these file extensions. The loader property represents the name of the loader.


## Hello React

In order to use react we need to install it first. Use npm to install react and react-dom

```
npm i react react-dom -S
```

Replace the existing console.log statement in the index.js with the following content

```
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
```
Then run the following command to update the bundle file with the new changes

```
./node_modules/.bin/webpack -d
```

Now, if you open the index.html in the browser, you can see Hello React

### Making Webpack Watch Changes

Running the webpack command every time when you change the file is not a productive workflow. It easily change by using the following command

```
./node_modules/.bin/webpack -d --watch
```

Now Webpack will run in the watch mode, which will automatically bundle the file whenever there is a change detected. To test it, change Hello React to something else and refresh the index.html in the browser. You can see your new changes.

### Using npm as a tool runner

The command ./node_modules/.bin/webpack can be made even simpler by leveraging npm.

Update the packages.json as below

```
{
  // ...
  "scripts": {
    "dev": "webpack -d --watch",
    "build" : "webpack -p"    
  },
  // ...
}

```

Now use *npm run build* to run Webpack in production mode, which minimizes the bundle file automatically, and the command npm run dev runs the Webpack in the watch mode.

# An easier way - Using Create React App

## Create Apps with No Configuration

*Create React App* is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

## Getting Started

### Installation

First, install the global package:

```
npm install -g create-react-app
```

Node.js 4.x or higher is required.

### Creating an App

Now you can use it to create a new app:

```
create-react-app hello-world
```

This will take a while as npm installs the transitive dependencies, but once it’s done, you will see a list of commands you can run in the created folder:

![image description][4]

### Starting the Server
Run *npm start* to launch the development server. The browser will open automatically with the created app’s URL.

![image description][5]

Create React App uses both Webpack and Babel under the hood.

The console output is tuned to be minimal to help you focus on the problems:

![image description][6]

ESLint is also integrated so lint warnings are displayed right in the console:

![image description][7]

Only a small subset of lint rules that often lead to bugs are active.

### Building for Production

To build an optimized bundle, run:

```
npm run build
```

![image description][8]

It is minified, correctly envified, and the assets include content hashes for caching.

### One Dependency

Your package.json contains only a single build dependency and a few scripts:

```
{
  "name": "hello-world",
  "dependencies": {
    "react": "^15.2.1",
    "react-dom": "^15.2.1"
  },
  "devDependencies": {
    "react-scripts": "0.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject"
  }
}
```

React Create App creators take care of updating Babel, ESLint, and Webpack to stable compatible versions so you can update a single dependency to get them all.

### Zero Configuration

There are no configuration files or complicated folder structures. The tool only generates the files you need to build your app.

```
hello-world/
  README.md
  index.html
  favicon.ico
  node_modules/
  package.json
  src/
    App.css
    App.js
    index.css
    index.js
    logo.svg
```

All the build settings are preconfigured and can't be changed. Some features, such as testing, are currently missing. 

### Trade of

Using Create React App has some disadvantages. Features like testing, sass support and server support are missing. Even dough, it's a fantastic tool to start learning React without the difficulties of setting up a webpack plus babel environment 

  [1]: http://webpack.github.io/assets/what-is-webpack.png
  [2]: https://www.filepicker.io/api/file/uwXkbHtfRzueOW9FZOaP
  [3]: https://www.filepicker.io/api/file/pZx8Fh9Ry0I5RaJSG8wu
  [4]: https://facebook.github.io/react/img/blog/create-apps-with-no-configuration/created-folder.png
  [5]: https://facebook.github.io/react/img/blog/create-apps-with-no-configuration/compiled-successfully.png
  [6]: https://facebook.github.io/react/img/blog/create-apps-with-no-configuration/failed-to-compile.png
  [7]: https://facebook.github.io/react/img/blog/create-apps-with-no-configuration/compiled-with-warnings.png
  [8]: https://facebook.github.io/react/img/blog/create-apps-with-no-configuration/npm-run-build.png