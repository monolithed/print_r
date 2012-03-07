print = require './print_r.coffee'

obj =
	number: 1,
	object:
		string: "text"
		array : [1, 2]

	other: ->
		@property = 1

		@method = () ->
		 @

class Foo
	constructor: (@name) ->
	move: (meters) -> @name

instance = new Foo "name"

console.log print.print_r obj
console.log print.print_r [1, 2, instance]