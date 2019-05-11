var result = (newsList, start, end) => {
    var res = '';
    for(var i = start; i<end; i++){
        res += '<article class="highlight-news">';
	    res += '<a href= ' + newsList[i].url + '>';	
        res += '<img src=' + newsList[i].thumb + ' alt="tin seagame" class="img-highlight-news">';
	    res += '</a>';
		res += '<a href=' + newsList[i].url + ' class="content-primary">';
		res += newsList[i].title;
		res += '</a>';
		res += '<time>' + newsList[i].createdAt + '</time>';
		res += '</article>';
    }
    return res;
}

module.exports = result;