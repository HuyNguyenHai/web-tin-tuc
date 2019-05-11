var Category = require('../mongooseModels/Category')

var result = (newsList, inIndexPage, start, end) => {
	if(typeof(newsList) === undefined) return "<h2>Không có tin tức nào được tìm thấy</h2>";
	var res = '';	
	if(inIndexPage){
		res += '<div class="col-lg-7 summary-highlight-news">';
    		for(var i = 0; i<4; i++){
       		res += '<article class="highlight-news" style="margin-bottom: 15px">';
	    			res += '<a href= ' + newsList[i].url + '>';	
        			res += '<img src=' + newsList[i].thumb + ' alt="tin seagame" class="img-highlight-news">';
	    			res += '</a>';
						res += '<a href=' + newsList[i].url + ' class="content-primary">';
							res += newsList[i].title;
						res += '</a>';
						res += '<time>' + newsList[i].createdAt + '</time>';
					res += '</article>';
				}
		res += '</div>';
		
		res += '<div class="col-lg-5 summary-highlight-news">';
    		for(var i = 4; i<6; i++){
        	res += '<article class="highlight-news" style="margin-bottom: 15px">';
	    			res += '<a href= ' + newsList[i].url + '>';	
        			res += '<img src=' + newsList[i].thumb + ' alt="tin seagame" class="img-highlight-news">';
	    			res += '</a>';
						res += '<a href=' + newsList[i].url + ' class="content-primary">';
							res += newsList[i].title;
						res += '</a>';
						res += '<time>' + newsList[i].createdAt + '</time>';
					res += '</article>';
				}
		res += '</div>';
	}else{
		for(var i=start; i < end; i++){
			res += '<article class="bottom-news">';
			res += '<a href=' + newsList[i].url + ' class="bottom-news-img">';
			res += '<img src=' + newsList[i].thumb +' alt="tin seagame">';
			res += '</a>';
			res += '<div class="bottom-news-text">';
			res += '<a href="" class="bottom-news-category"><p>' + newsList[i].category +'</p></a>';
			res += '<a href=' + newsList[i].url + ' class="bottom-news-title"><p>'
			+ newsList[i].title +'</p></a>';
			res += '<time class="post-time">' + newsList[i].createdAt +'</time>';
			res += '<p class="desc">'+ newsList[i].description;
			res += '</p></div></article>';
		}
	}
  return res;
}

module.exports = result;