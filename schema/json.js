
function build (json, sourceName, title) {
	return {
		source: '@'+sourceName+' {json} '+title+':\n'+json+'\n',
		name: sourceName.toLowerCase(),
		sourceName: sourceName,
		content: title+':\n'+json+'\n'
	};
}

module.exports = build;