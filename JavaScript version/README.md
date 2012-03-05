# print_r()

This module provides a function that prints human-readable information about the object

##Prototype:
	string print_r (mixed object [, boolean view = false])

## Use
*For example you could use the following code:*

	var obj = {
		number: 1,
		object: {
			string: "text",
			array : [1, 2, 3]
		},
		other: new function() {
			this.property = 10;

			this.method = function() {
				return this;
			}
		}
	};

	var Class = function() {
		this.a = 1;
		this.b = 2;

		this.method = function() {
			return this;
		}
	};

	var instance = new Class;

	console.log(print_r(instance));
	console.log(print_r(object));
	console.log(print_r([1, 2, 3]));

*Result:*

	class
	------------------------------
	{
		a: 1,
		b: 2,
		method: function () {
			return this;
		}
	}

	object
	------------------------------
	{
		number: 1,
		object: {
			string: "text",
			array: [1,2]
		},
		other: {
			property: 10,
			method: function () {
				return this;
			}
		}
	}

	array
	------------------------------
	[0] => 1
	[1] => 2
	[2] => 3

If you set the second parameter <view> in boolean value True, you will get an alternate view.<br />

*Result:*

	class
	------------------------------
	{
		[a] => 1,
		[b] => 2,
		[method] => function () {
			return this;
		}
	}

	object
	------------------------------
	{
		[number] => 1,
		[object] => {
			[string] => "text",
			[array] => [1,2,3]
		},
		[other] => {
			[property] => 10,
			[method] => function () {
				return this;
			}
		}
	}

	array
	------------------------------
	[0] => 1
	[1] => 2
	[2] => 3


* License
    The toCSS module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)