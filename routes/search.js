var express = require('express')

var router = express.Router()
//mongoose models
var News = require('../models/mongooseModels/News')
var Category = require('../models/mongooseModels/Category')
//ejs models
var CategoryNewsList = require('../models/ejsModels/CategoryNewsList')
var RightNewsList = require('../models/ejsModels/RightNewsList')

/* GET home page. */
router.get('/', (req, res) => {
  const query = req.query
  const keyWord = query.key
  News.find()
  .populate('category')
  .exec((err, categoryNewsList)=>{
    News.find()
    .exec((err, newsList) => {
      res.render('searchResult',{
        keyWord: keyWord,
        categoryNewsList: CategoryNewsList(categoryNewsList, false, 10),
        newestNewsList: RightNewsList(newsList)
      })
    })
  })
})

module.exports = router

