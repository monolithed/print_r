/**
 * print_r()
 * string print_r (mixed object [, boolean view = false])
 * Prints human-readable information about the object
 * @author: Alexander Guinness
 * @version: 1.0
 * @params: {mixed} The Object to be printed
 * @params: {view} Optional boolean parameter to set an alternative view
 * @return String
 * @license: MIT
 * @date: 2/27/12 9:28 PM
**/

function print_r(object, view) {
	return function self(object, indent) {
		var type = Object.prototype.toString.call(object),
			data = [];

		if (type === '[object Array]' && !indent) {
			var i = object.length;

			while (i--)
				data.unshift('[', i, '] => ', object[i], '\n');
		}
		else {
			if (type === '[object Object]') {
				indent = indent || '';

				var get_view = function(i) {
					return (view ? ['\t[', i, '] => '] : ['\t', i, ': ']).join('');
				},
				block = ['{\n'];

				for (var i in object)
					block.push(indent, get_view(i), self(object[i], indent + '\t'), ',', '\n');

				block.splice(-2, 1);
				data.push(block.join(''), indent, '}');
			}
			else {
				data.push({
					'[object String]': '"' + object + '"',
					'[object Array]' : '[' + object + ']'
				}[type] || object);
			}
		}
		return data.join('');
	}(object);
}

//exports.toCSS