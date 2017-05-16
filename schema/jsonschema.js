const jsf = require('json-schema-faker');

var $RefParser = require('json-schema-ref-parser');
function build (data, sourceName, title) {
	const schema = JSON.parse(data);
	// run sync - https://github.com/BigstickCarpet/json-schema-ref-parser/issues/14
	let obj = {}, done = false;
	$RefParser.dereference(schema, function(err, schema) {
		if (err) {
			console.error(err);
			done = true;
			return;
		}

		const json = JSON.stringify( jsf(schema), null, 4);

		obj = {
			source: '@'+sourceName+' {json} '+title+':\n'+json+'\n',
			name: sourceName.toLowerCase(),
			sourceName: sourceName,
			content: title+':\n'+json+'\n'
		};

		done = true;
	});
	require('deasync').loopWhile(function(){ return !done; });

	return obj;
}

module.exports = build;