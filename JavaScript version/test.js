//var print = require("./print_r.js");

var obj = {
	number: 1,
	object: {
		string: "text",
		array : [1,2]
	},
	other: new function() {
		this.property = 1;

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

//console.log(print.print_r([1, 2, instance], 1));