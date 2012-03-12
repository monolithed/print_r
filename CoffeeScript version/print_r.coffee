###
- print_r()
- string print_r (mixed object [, boolean view = false])
- Prints human-readable information about the object
- @author: Alexander Guinness
- @version: 1.1
- @params: {mixed} data - the Object to be printed
- @params: {boolean} view - optional boolean parameter to set an alternative view
- @return String
- @license: MIT
- @date: 2/27/12 9:28 PM
###

print_r = (data, view) ->
	'use strict'

	###
	- string build (mixed data [, string indent = ''])
	###
	build = (data, indent) ->
		{
			init: ->
				if @type(data) is 'object'
					@depth 0

				else if @type(data) is 'array'
					@depth 1

				else
					@output.push {
						'string': "'#{data}'"
						'function': data.toString()
							.replace(/\b.*\n/g, '\t\t\t$&').replace(/\}$/, '\t\t$&').replace /^\t*/, ''
					}[@type data] or data

				@output.join ''

			output: []

			###
			 - string type (object type)
			 ###
			type: (type) ->
				Object::toString.call(type).replace(/object|[\[\]\s]/g, '').toLowerCase()

			###
			 - string type (mixed key, boolean array)
			###
			get_view: (key, array) ->
				(if view or array then ['\t[', key, '] => '] else ['\t', key, ': ']).join ''

			###
			 - void depth (number array)
			###
			depth: (array) ->
				indent ||= ''

				brace = [['{', '}'], ['[', ']']][array]
				block = [brace[0], '\n']

				for key, value of data
					if data.hasOwnProperty(key)
						block.push indent, @get_view(key, array), build(value, "#{indent}\t"), ',', '\n'

				block.splice -2, 1
				@output.push block.join(''), indent, brace[1]
		}.init()

	build data

exports.print_r = print_r