var result = (carouselNewsList) => {
    var res = '';
    res += '<div class="carousel-item active">';
	res += '<div class="slider">';
    res += '<a href="#"><img class="d-block w-100 img-slider" src=' + carouselNewsList[0].imgSourse +' alt="First slide"></a>';
    res += '<h2 class="news-title"><a href= ' + carouselNewsList[0].linkBaiViet 
        + ' style="color: #fff;">'+carouselNewsList[0].title+'</a></h2></div></div>';
    for(var i=1; i < carouselNewsList.length; i++){
        res += '<div class="carousel-item">';
		res += '<div class="slider">';
        res += '<a href="#"><img class="d-block w-100 img-slider" src='
            + carouselNewsList[i].imgSourse + ' alt="Second slide"></a>';
        
        res += '<h2 class="news-title"><a href= ' + carouselNewsList[0].linkBaiViet + ' style="color: #fff;">' 
            + carouselNewsList[i].title + '</a></h2></div></div>';
    }
    return res    
}
module.exports = result;