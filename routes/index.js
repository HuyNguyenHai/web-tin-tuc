var express = require('express')

var router = express.Router()
var News = require('../models/mongooseModels/News')
var Category = require('../models/mongooseModels/Category')
//ejs-models
var CarouselNews = require('../models/ejsModels/CarouselNews')
var CategoryList = require('../models/ejsModels/CategoryList')
var NewsList = require('../models/ejsModels/NewsList')
var CategoryNewsList = require('../models/ejsModels/CategoryNewsList')

/* GET home page. */
router.get('/', function(req, res, next) {
  Category.find()
  .exec((err, categories) => {
    News.find()
    .exec((err, newsList) => {
      News.find({isCarouselNews: true})
      .exec((err, carouselNewsList) => {
          News.find({category: 'Seagame'})
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

module.exports = router

