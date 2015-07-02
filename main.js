define(
  [ './config'
  ]
, function (config) {
    requirejs.config(config)
    require(['./shell'])
  } 
)

