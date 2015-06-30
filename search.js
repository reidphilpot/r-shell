define(
  function () {
    return function (query, page) {
      this.innerHTML = "Hello from search.<br><br>query:" + query + "<br>page:" + page
    } 
  } 
)