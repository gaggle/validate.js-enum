"use strict";
var expect = require("must")
var validate = require("validate.js")
var validateEnum = require("../")

validateEnum.register(validate)

describe("validate.js-enum", function () {
  var an_enum = {
    ham: "ham",
    eggs: "eggs"
  }

  describe("#register", function () {
    it("should register itself", function () {
      var module = {validators: {}}
      validateEnum.register(module)
      expect(module.validators.enum).to.be.a.function()
    })
  })

  describe("simple schema", function () {
    beforeEach(function () {
      this.schema = {foo: {enum: an_enum}}
    })

    it("should validate if value is valid", function () {
      var res = validate({foo: an_enum.ham}, this.schema)
      expect(res).to.be.undefined()
    })

    it("should fail if value is unknown", function () {
      var res = validate({foo: "invalid_enum"}, this.schema)
      expect(res).to.be.object()
    })
  })

  describe("validate.js-enum async integration", function () {
    beforeEach(function () {
      this.schema = {foo: {enumAsync: an_enum}}
    })

    it("should validate", function () {
      return validate.async({foo: an_enum.ham}, this.schema)
        .must.resolve.to.object()
    })

    it("should find errors", function () {
      return validate.async({foo: "invalid_enum"}, this.schema)
        .must.reject.to.object()
    })
  })
})
