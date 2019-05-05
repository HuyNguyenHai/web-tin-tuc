var result = (newsList, inIndexPage) => {
	var res = '';	
	if(inIndexPage){
		res += '<div class="col-lg-7 summary-highlight-news">';
    		for(var i = 0; i<4; i++){
       		res += '<article class="highlight-news">';
	    			res += '<a href= ' + newsList[i].linkBaiViet + '>';	
        			res += '<img src=' + newsList[i].imgSourse + ' alt="tin seagame" class="img-highlight-news">';
	    			res += '</a>';
						res += '<a href=' + newsList[i].linkBaiViet + ' class="content-primary">';
							res += newsList[i].title;
						res += '</a>';
						res += '<time>' + newsList[i].createdAt + '</time>';
					res += '</article>';
				}
		res += '</div>';
		
		res += '<div class="col-lg-5 summary-highlight-news">';
    		for(var i = 4; i<6; i++){
        	res += '<article class="highlight-news">';
	    			res += '<a href= ' + newsList[i].linkBaiViet + '>';	
        			res += '<img src=' + newsList[i].imgSourse + ' alt="tin seagame" class="img-highlight-news">';
	    			res += '</a>';
						res += '<a href=' + newsList[i].linkBaiViet + ' class="content-primary">';
							res += newsList[i].title;
						res += '</a>';
						res += '<time>' + newsList[i].createdAt + '</time>';
					res += '</article>';
				}
		res += '</div>';
	}else{
		for(var i=0; i < newsList.length; i++){
			res += '<article class="category-news" style="margin-bottom: 20px">';
			res += '<a href= "/' + newsList[i].linkBaiViet + '"><img src='
					+ newsList[i].imgSourse + ' alt="tin seagame" class="img-category-news"></a>';
			res += '<a href= "/' + newsList[i].linkBaiViet + '" class="content-primary">'
					+	newsList[i].title + '</a><br>';
			res += '<time>' + newsList[i].createdAt + '</time></article>';
		}
	}
  return res;
}

module.exports = result;