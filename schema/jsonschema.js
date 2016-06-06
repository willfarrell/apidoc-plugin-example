var jsf = require('json-schema-faker');

var $RefParser = require('json-schema-ref-parser');
function build (data, element, title) {
	var schema = JSON.parse(data);
	var str = '';
	// run sync - https://github.com/BigstickCarpet/json-schema-ref-parser/issues/14
	var str, done = false;
	$RefParser.dereference(schema, function(err, schema) {
		if (err) {
			console.error(err);
			done = true;
			return;
		}
		
		var json = jsf(schema);
		json = JSON.stringify( json, null, 4);
		
		var element = { source: '@'+element+' '+title+':\n'+json+'\n',
				name: element.toLowerCase(),
				sourceName: element,
				content: title+':\n'+json+'\n'
			};
			
		str = '@'+element+' '+title+':'+"\n";
		str += JSON.stringify( json, null, 4);
		
		done = true;
	});
	require('deasync').loopWhile(function(){return !done;});
	//console.log(str);
	return str;
}

module.exports = build;