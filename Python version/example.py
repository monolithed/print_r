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

#Example
for i in [['class', Class], ['dict', obj], ['list', [1, 2, 3]]]:
	print('\n', i[0], '\n', '-' * 30)
	print_r(i[1])