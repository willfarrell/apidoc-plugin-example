const fs = require('fs');
const path = require('path');

const elementParser = require('./parser/api_example');
const schemas = {
	'json': require('./schema/json'),
	'jsonschema': require('./schema/jsonschema'),
	'xml': require('./schema/xml')
};

let app = {};

module.exports = {
	init: function(_app) {
		app = _app;
		//app.addHook('parser-find-element-apiexample', parserExampleElement);
		app.addHook('parser-find-elements', parserExampleElements, 201);
	}
};

// Doesn't work
function parserExampleElement(elements, element, block, filename) {
	const values = elementParser.parse(element.content, element.source);
	app.log.debug('apiexample.path',values.path);
	if (schemas[values.schema]) {
		const data = fs.readFileSync( path.join(path.dirname(filename), values.path), 'utf8').toString();
		element = schemas[values.schema](data, values.element, values.title);
	}
	return element;
}

function parserExampleElements(elements, element, block, filename) {
	if ( element.name !== 'apiexample' ) { return elements; }
	elements.pop();

	const values = elementParser.parse(element.content, element.source);
	app.log.debug('apiexample.path',values.path);
	if (schemas[values.schema]) {
		const data = fs.readFileSync( path.join(path.dirname(filename), values.path), 'utf8').toString();
		element = schemas[values.schema](data, values.element, values.title);
	}
	elements.push(element);
	return elements;
}