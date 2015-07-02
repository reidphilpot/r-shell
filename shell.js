define(
  [ 'require'
  , 'backbone'
  , 'underscore'
  , 'text!./routes.json'
  ]
  , function (require, Backbone, _, routesJson) {
  
    var router = new Backbone.Router()
      , scope = document.getElementById('root')
      , routes = _.pairs(JSON.parse(routesJson))

    routes.forEach(function (route) {
      router.route.apply(router, route)  
    }) 
  
    router.on('route', loadModule)

    // start listening to state changes
    Backbone.history.start() 

    function loadModule(name, params) {
      require([name], callModule.bind(scope, params))     
    }

    function callModule(params, module) {
      module.apply(this, params)
    }

  }
)