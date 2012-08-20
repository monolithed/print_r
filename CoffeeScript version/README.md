# print_r

Prints human-readable information about the object

##Synopsis

```coffeescript
string print_r (mixed object [, Boolean view = false])
```

## Use
*For example you could use the following code:*

**Server side:**

```coffeescript
print = require './print_r.coffee'

object =
	number: 1,
	object:
		string: "text"
		array : [1, 2]

	other: ->
		@property = 1
		@method = () -> @

class Foo
	constructor: (@name) ->
	move: (meters) -> @name

instance = new Foo "name"

console.log print.print_r object
console.log print.print_r [1, 2, instance]
```

*Result:*

```coffeescript
{
	number: 1,
	object: {
		string: 'text',
		array: [
			[0] => 1,
			[1] => 2
		]
	},
	other: function () {
		this.property = 1;
			return this.method = function() {
				return this;
			};
		}
	}
[
	[0] => 1,
	[1] => 2,
	[2] => {
		name: 'name',
		move: function (meters) {
			return this.name;
		}
	}
]
```

* License
    The print_r module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)