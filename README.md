# validate.js-enum
[![Build Status](https://travis-ci.org/gaggle/validate.js-enum.svg?branch=master)](https://travis-ci.org/gaggle/validate.js-enum)
[![Coverage Status](https://coveralls.io/repos/github/gaggle/validate.js-enum/badge.svg?branch=master)](https://coveralls.io/github/gaggle/validate.js-enum?branch=master)

`enum` validation plugin for [validate.js](http://validatejs.org).

Install:

    npm install gaggle/validate.js-enum

Use:

    var validate = require("validate.js")
    require("validate.js-enum").register()

    var an_enum = { ham: "ham", eggs: "eggs" }
    var schema = {foo: {enum: an_enum}}
    validate({foo: an_enum.ham}, this.schema)
    // => undefined

    validate({foo: "invalid"}, this.schema)
    // => { foo: [ 'Foo is not an element of enum: ham, eggs' ] }
