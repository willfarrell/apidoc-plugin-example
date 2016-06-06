
function build (parser, data, element, title) {
	var json = JSON.parse(data);
	json = JSON.stringify( json, null, 4);
	var str = '@'+element+' '+title+':'+"\n";
		str += JSON.stringify(json, null, 4);
	return { source: '@'+element+' '+title+':\n'+json+'\n',
				name: element.toLowerCase(),
				sourceName: element,
				content: title+':\n'+json+'\n'
			};
}

module.exports = build;