var result = (categories) => {
    var res = '';
    for(var i=0 ;i< categories.length; i++){
        res += '<li><span style="z-index:1000">';
        res += categories[i].title;
        res += '</span>';
        res += '<a href= "/category/' + categories[i].link + '"><img src=' + categories[i].imgUrl +'></a></li>';
    }
    return res;
}
module.exports = result;