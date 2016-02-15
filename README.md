## React Starter — "isomorphic" web app boilerplate with Flux implementation

This React Starter was based off the React Starter Kit by Kriasoft and can be found [here](https://github.com/kriasoft/react-starter-kit)

> React Starter is an opinionated
> boilerplate for web development built on top of Facebook's
> [React](https://facebook.github.io/react/) library,
> [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server
> and [AltJs](http://alt.js.org) for managing data and implementing
> the [Flux](http://facebook.github.io/flux/) architecture.
> [Material UI](http://www.material-ui.com/) is being used for UI components.
> Containing modern web development tools such as [Webpack](http://webpack.github.io/),
> [Babel](http://babeljs.io/) and [BrowserSync](http://www.browsersync.io/).
> Helping you to stay productive following the best practices. A solid starting
> point for both professionals and newcomers to the industry.

### Getting Started

  * Follow the [getting started guide](./docs/getting-started.md) to download and run the project
  * Check the [code recipes](./docs/recipes) used in this boilerplate, or share yours

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /components/            # React components
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core framework and utility functions
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /routes.js              # Universal (isomorphic) application routes
│   └── /server.js              # Server-side startup script
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```


### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [AltJs - A library for managing data within JavaScript applications](http://alt.js.org/)
  * [Jest - Painless Unit Testing](http://facebook.github.io/jest/)
  * [Flow - A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)


### License

Copyright © 2016 Eric Richardson. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/erichardson30/react-starter/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.
