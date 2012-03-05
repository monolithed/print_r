'''
- print_r()
- string print_r (mixed object [, bool view = False])
- Prints human-readable information about the object
- @author: Alexander Guinness
- @version: 1.0
- @params: {mixed} The Object to be printed
- @params: {view} Optional boolean parameter to set an alternative view
- @return string represented by standard output function print()
- @license: MIT
- @date: 2/27/12 9:28 PM
'''
__all__ = ["print_r"]

def print_r(obj, view = 0):
	def build(obj, indent = ''):
		data = []

		if isinstance(obj, list) and not indent:
			for key, value in enumerate(obj):
				data.extend(['[', key, '] => ', value, '\n'])
		else:
			def depth(item):
				def get_view(i):
					return ''.join(view and ['\t[', i, '] => '] or ['\t', i, ': '])

				block = ['{\n']

				for key, value in sorted(item):
					block.extend([indent, get_view(key), build(value, indent + '\t'), ',', '\n'])

				block.pop(-2)
				data.extend([''.join(block), indent, '}'])

			if isinstance(obj, dict):
				depth(obj.items())

			elif '__dict__' in dir(obj) and type(obj) is not type:
				depth(obj.__dict__.items())

			elif isinstance(obj, str):
				data.extend(['"', obj, '"'])

			else:
				data.append(obj)

		return ''.join(map(str, data))
	print(build(obj))
