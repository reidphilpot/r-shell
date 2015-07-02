define(
  'search/search'
, function () {
    return function (query, page) {
      this.innerHTML = "Hello from 'search/search'.<br><br>query: " + query + "<br>page: " + page
    } 
  } 
)