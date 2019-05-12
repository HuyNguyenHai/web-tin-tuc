var StringtoTagList = require('../../modules/stringtoTagList')

var result = (tags) => {
    var res = '<p class="tag-list">'
    var tagList = StringtoTagList(tags)
    for(var i = 0; i<tagList.length; i++){
		res += '<a href=' + "/search?key="+tagList[i].slice(1)+ '>' + tagList[i] +'</a>'
    }
    res+='</p>'
    return res
}

module.exports = result;