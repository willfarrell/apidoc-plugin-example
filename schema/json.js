
function build (data, element, title) {
	var json = JSON.parse(data);
	var str = '@'+element+' '+title+':'+"\n";
		str += JSON.stringify(json, null, 4);
	return str;
}

module.exports = build;