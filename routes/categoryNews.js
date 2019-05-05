var express = require('express')

var router = express.Router()
//mongoose models
var News = require('../models/mongooseModels/News')
var Category = require('../models/mongooseModels/Category')
//ejs models
var CategoryNewsList = require('../models/ejsModels/CategoryNewsList')

/* GET home page. */
router.get('/:link', (req, res) => {
  var link = req.params.link
  Category.findOne({link: link})
  .exec((err, category) => {
    var categoryTitle = category.title
    News.find({category: category.title})
    .exec((err, newsList)=>{
      res.render('categoryPage',{
          categoryTitle: categoryTitle,
          categoryNewsList: CategoryNewsList(newsList, false)
      })
    })
  })
})

module.exports = router

