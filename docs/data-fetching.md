## Data Fetching with WHATWG Fetch

There is isomorphic `core/fetch` module that can be used the same way in both
client-side and server-side code as follows:

```jsx
import fetch from '../core/fetch';

export const path = '/products';
export const action = async () => {
  const response = await fetch('/api/products');
  const data = await response.json();
  return <Layout><Products {...data} /></Layout>;
};
```

When this code executes on the client, the Ajax request will be sent via
GitHub's [fetch](https://github.com/github/fetch) library (`whatwg-fetch`),
that itself uses XHMLHttpRequest behind the scene unless `fetch` is supported
natively by the user's browser.

Whenever the same code executes on the server, it uses
[node-fetch](https://github.com/bitinn/node-fetch) module behind the scene that
itself sends an HTTP request via Node.js `http` module. It also converts
relative URLs to absolute (see `./core/fetch/fetch.server.js`).

Both `whatwg-fetch` and `node-fetch` modules have almost identical API. If
you're new to this API, the following article may give you a good introduction:

https://jakearchibald.com/2015/thats-so-fetch/

## Data Fetching with [Axios](https://github.com/mzabriskie/axios)

There is a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
based `axios` module that can be used to make
[XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
as well as [http](https://nodejs.org/api/http.html) requests from node.js. It automatically
transforms for JSON data and protects the client side against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

#### Data fetching to an external API should start in the router
##### The router should make a call to the store which invokes a function from the source
##### The source calls the API and returns the data invoking the action and returning the data to the store

routes.js :
```jsx
const getData = async (location, callback) => {
    await AppStore.fetchData();
    callback(null, () => <ContactPage />)
}
```
AppSource.js :
```jsx
fetchData() {
    return {
        async remote(state) {
            return Api.getData()
        },

        shouldFetch(state) {
            return (state.data.length == 0);
        },
        success: AppActions.getData
    }
}
```
