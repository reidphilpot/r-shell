define(
  [ 'require'
  , 'backbone'
  , 'underscore'
  , 'jquery'
  ]
  , function (require, Backbone, _, $) {
  
    var router = new Backbone.Router()
      , scope = document.getElementById('root')

    $.getJSON('routes.json', startRouter)

    function startRouter (routes) {
      _.pairs(routes).forEach(function (route) {
        router.route.apply(router, route)  
      }) 
    
      router.on('route', loadModule)

      // start listening to state changes
      Backbone.history.start() 
    }

    function loadModule(name, params) {
      require([name], callModule.bind(scope, params))     
    }

    function callModule(params, module) {
      module.apply(this, params)
    }

  }
)