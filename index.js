var fs = require('fs');
var path = require('path');

var elementParser = require('./parser/api_example');
var schemas = {
	'json': require('./schema/json'),
	'jsonschema': require('./schema/jsonschema')
};

var app = {};

module.exports = {

    init: function(_app) {
        app = _app;
        app.addHook('parser-find-element-apiexample', parserExampleElement);
    }

};

function parserExampleElement(element, block, filename) {

    var values = elementParser.parse(element.content, element.source);
    //app.log.verbose('element.values',values);
	if (schemas[values.schema]) {
		var data = fs.readFileSync( path.join(path.dirname(filename), values.path), 'utf8').toString();
		element = schemas[values.schema](data, values.element, values.title);
	}
    
    return element;
}