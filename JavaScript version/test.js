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

//Example
[['object', obj], ['class', instance], ['array', [1, 2, 3]]].forEach(function(i) {
	console.log('\n', i[0], '\n', '--------')
	console.log(print_r(i[1], 1))
});