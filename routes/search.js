var express = require('express')

var router = express.Router()
//mongoose models
var News = require('../models/mongooseModels/News')
var Category = require('../models/mongooseModels/Category')
//ejs models
var CategoryNewsList = require('../models/ejsModels/CategoryNewsList')
var RightNewsList = require('../models/ejsModels/RightNewsList');

/* GET home page. */
router.get('/', (req, res) => {
  const query = req.query;
  const keyWord = query.key;
  News.find({tags: { "$regex": keyWord, "$options": "i"}})
  .populate('category')
  .exec((err, searchResult)=>{
    News.find()
    .exec((err, newsList) => {
      res.render('searchResult',{
        keyWord: keyWord,
        categoryNewsList: CategoryNewsList(searchResult, false, 10),
        newestNewsList: RightNewsList(newsList, 8)
      })
    })
  })
})

router.post('/', (req, res) => {
  res.redirect('/search?key='+req.body.keyword);
})

module.exports = router;

