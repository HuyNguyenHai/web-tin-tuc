// mongoimport --host cluster0-shard-00-00-5wvnk.mongodb.net:27017 --db web-tin-tuc --collection NewsList --file NewsList.json --authenticationDatabase admin --ssl --username admin --password admin1
const mongoose = require('mongoose')
var Category = require('./Category')
const Schema = mongoose.Schema

var schema = new Schema({
    content: {type: String, trim: true, default: ''},
    thumb: {type: String, trim: true, default: '/images/seagame/vn-seagame.jpg'},
    title: {type: String, trim: true, default: ''},
    createdAt:  {type: String, trim: true, default: '1/1/1970'},
    isCarouselNews: {type: Boolean, default: false},
    description: {type: String, default: ''},
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    tags: {type: String, trim: true},
    url: {type: String, trim: true, default: '#'},
    views: {type: Number, default: 0}
})

schema.statics.findByCategoryTitle = function (categoryTitle, callback) {
    var query = this.find();

    Category.findOne({title: categoryTitle}, (err, category) => {
        query.where(
            {category: category._id}
        ).exec(callback)
    })
    return query
}

module.exports = mongoose.model('News', schema, 'NewsList')