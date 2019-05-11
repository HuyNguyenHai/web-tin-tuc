function StringtoTagList(tags) {
    var str = tags+'';
    return str.split(',');
}

var result = (tags) => {
    var res = '<p class="tag-list">'
    var tagList = StringtoTagList(tags)
    for(var i = 0; i<tagList.length; i++){
		res += '<a href="#">' + tagList[i] +'</a>'
    }
    res+='</p>';
    return res;
}

module.exports = result;