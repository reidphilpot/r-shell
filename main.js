define(
  [ 'require'
  ]
, function (require) {

    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        bootstrap(JSON.parse(xhr.responseText))
      }
    }
    xhr.open('GET', 'requires.json', true)
    xhr.send()

    function bootstrap (config) {
      requirejs.config(config)
      require(['./shell'])
    }
        
  } 
)

