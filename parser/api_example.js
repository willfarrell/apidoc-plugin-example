var trim = require('trim');

function parse(content) {
	content = trim(content);

	if (content.length === 0)
		return null;
	
	// @apiExample {json=relative_path} additional_argument
	var parseRegExp = /^\{(.+?)=(.+?)\}\s*(?:\s+(.+?))?\s(.+?)$/g;
	var matches = parseRegExp.exec(content);

	if ( ! matches)
		return null;

	return {
		schema : matches[1],
		path : matches[2],
		element : matches[3] || 'apiParamExample',
		title: matches[4]
	};
}

/**
 * Exports
 */
module.exports = {
	parse        : parse,
	path         : 'local.example',
	method       : 'push',
	preventGlobal: true
};
