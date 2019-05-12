var express = require('express')

var router = express.Router()
//mongoose models
var News = require('../models/mongooseModels/News')
var Category = require('../models/mongooseModels/Category')
//ejs models
var CategoryNewsList = require('../models/ejsModels/CategoryNewsList')
var RightNewsList = require('../models/ejsModels/RightNewsList')

/* GET home page. */
router.get('/:category', (req, res) => {
  var category = req.params.category
  Category.findOne({link: category})
  .exec((err, category) => {
    var categoryId = category._id
    News.find({category: categoryId})
    .populate('category')
    .exec((err, categoryNewsList)=>{
      News.find()
      .exec((err, newsList) => {
        // res.json({data:categoryNewsList})
        res.render('category',{
          categoryTitle: category.title,
          categoryNewsList: CategoryNewsList(categoryNewsList, false, 10),
          newestNewsList: RightNewsList(newsList)
        })
      })
    })
  })
})

module.exports = router

