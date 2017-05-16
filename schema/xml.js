
function build (xml, sourceName, title) {
	return {
		source: '@'+sourceName+' {xml} '+title+':\n'+xml.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'\n',
		name: sourceName.toLowerCase(),
		sourceName: sourceName,
		content: title+':\n'+xml+'\n'
	};
}

module.exports = build;