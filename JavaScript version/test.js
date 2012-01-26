var obj = {
	number: 1,
	object: {
		string: "text",
		array : [1,2]
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


//Example
[['object', obj], ['class', instance], ['array', [1, 2, 3]]].forEach(function(i) {
	console.log('\n', i[0], '\n', '--------')
	console.log(print_r(i[1], 1))
});