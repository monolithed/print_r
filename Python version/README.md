# print_r()

This module provides a function that prints human-readable information about the object

##Prototype:
	string print_r (mixed object [, bool view = False])

## Use
*For example you could use the following code:*

	from print_r import *

	class Class:
		def __init__(self):
			self.foo = 10

	instance = Class()

	obj = {
		'number': 1,
		'object': {
			'string': "text",
			'list' : [1, 2, 3]
		},
		'class' : Class,
		'instance' : instance
	};

	print_r(Class);
	print_r(obj);
	print_r(list);

*Result:*

	class
	------------------------------
	<class '__main__.Class'>

	dict
	------------------------------
	{
		class: <class '__main__.Class'>,
		instance: {
			foo: 10
		},
		number: 1,
		object: {
			list: [1, 2, 3],
			string: "text"
		}
	}

	list
	------------------------------
	[0] => 1
	[1] => 2
	[2] => 3

If you set the second parameter <view> in boolean value True, you will get an alternate view.<br />

*Result:*

	class
	------------------------------
	<class '__main__.Class'>

	dict
	------------------------------
	{
		[class] => <class '__main__.Class'>,
		[instance] => {
			[foo] => 10
		},
		[number] => 1,
		[object] => {
			[list] => [1, 2, 3],
			[string] => "text"
		}
	}

	list
	------------------------------
	[0] => 1
	[1] => 2
	[2] => 3


* License
    The toCSS module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
