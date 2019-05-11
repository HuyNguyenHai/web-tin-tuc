var express = require('express')

var router = express.Router()
var News = require('../models/mongooseModels/News')
var Category = require('../models/mongooseModels/Category')
//ejs-models
var CarouselNews = require('../models/ejsModels/CarouselNews')
var CategoryList = require('../models/ejsModels/CategoryList')
var NewsList = require('../models/ejsModels/NewsList')
var CategoryNewsList = require('../models/ejsModels/CategoryNewsList')
var RightNewsList = require('../models/ejsModels/RightNewsList') 
var NewsTags = require('../models/ejsModels/NewsTags')  

/* GET home page. */
router.get('/', function(req, res, next) {
  Category.find()
  .exec((err, categories) => {
    News.find()
    .exec((err, newsList) => {
      News.find({isCarouselNews: true})
      .exec((err, carouselNewsList) => {
        News.findByCategoryTitle('Seagame')
        .exec((err, categoryNewsList) => {
          res.render('index', { 
            title: 'Tin bóng đá',        
            CategoryList: CategoryList(categories),
            NewestNewsList: NewsList(newsList, 0, 4),
            tinSeagame : CategoryNewsList(categoryNewsList, true),
            carousel: CarouselNews(carouselNewsList)
          })
        })  
      })
    })
  })
})

//reading Page
router.get('/:url', (req, res) => {
  var newsUrl = '/'+req.params.url
  News.find()
  .exec((err, newsList) => {
    News.findOne({url: newsUrl})
    .populate('category')
    .exec((err, news) => {
      res.render('readPage',{
        title: news.title,
        category: news.category.title,
        newsContent: news.content,
        bottomNewsList: CategoryNewsList(newsList, false, 0, 6),
        relateNewsList: RightNewsList(newsList),
        newestNewsList: RightNewsList(newsList),
        tags: NewsTags(news.tags)
      })
    })
  })
})

module.exports = router

