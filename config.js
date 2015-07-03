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
      "jquery": "./bower_components/jquery/dist/jquery.min"
    , "backbone": "./bower_components/backbone/backbone-min"
    , "underscore": "./bower_components/underscore/underscore-min"
    , "text": "./bower_components/requirejs-text/text"
    , "search/search": "./search"
   }
  }
)