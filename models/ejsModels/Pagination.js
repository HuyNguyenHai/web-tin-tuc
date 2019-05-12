var result = (newsList, activePage, isSearchPagePage) => {
    var res = '<div><ul class="pagination justify-content-center">';
    res += '<li class="page-item"><a href='; 
    res +="";
    res += 'class="page-link">Trước</a></li>';
    
    res += '<li class="page-item"><a href="" class="page-link">1</a></li>'
								
    res += '<li class="page-item"><a href=';
    res += ""
    res += ' class="page-link">Sau</a></li>';
	res += '</ul></div>';
    return res;
}

module.exports = result;