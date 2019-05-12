var result = (newsList) => {
    var res = '';
    res += '<div class="right-news-item right-news-item-first">';
	res += '<a href='+"/tintuc"+  newsList[0].url +'><img src='+ newsList[0].thumb +' alt="" width="100%" height="auto">';
	res += '<b>'+ newsList[0].title +'</b></a>';
    res += '</div>';
    for(var i = 1; i<8; i++){
        res += '<hr>';
        res += '<div class="right-news-item right-news-item-first">';
        res += '<a href='+"/tintuc"+  newsList[0].url +'>';
        res += '<b>'+ newsList[0].title +'</b></a>';
        res += '</div>';
    }
    return res;
}

module.exports = result;