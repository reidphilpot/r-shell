define(
  {
    "baseUrl": ""
  , "shim": {
      "backbone": {
        "deps": ["underscore", "jquery"]
      , "exports": "Backbone"
      }
    , "underscore": {
        "exports": "_"
      }
    , "jquery": {
        "exports": "$"
      }
    }
  , "paths": {
      "jquery": "./node_modules/jquery/dist/jquery.min"
    , "backbone": "./node_modules/backbone/backbone-min"
    , "underscore": "./node_modules/backbone/node_modules/underscore/underscore-min"
    , "text": "./node_modules/requirejs-text/text"
    , "search/search": "./search"
   }
  }
)