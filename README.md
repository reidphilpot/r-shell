# r-shell

A shell with a lightweight router that maps routes to AMD modules

## Usage

### Define routes

Define your routes in `routes.json`

```javascript
{
  "search/:query(?page=:page)": "search/search" 
}
```

This dictionary maps a route to a named module.

### Define modules

Your module must return a function that will be called with the dynamic segments in your route, in the context of the bootstrapping root node:

```javascript
define(
  'search/search'
, function () {
    return function (query, page) {
      this.innerHTML = "Hello from 'search/search'.<br><br>query: " + query + "<br>page: " + page
    } 
  } 
)
```

### Load module

```
http://localhost/#search/foo?page=1
```