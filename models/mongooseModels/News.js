const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    linkBaiViet: {type: String, trim: true, default: 'baiviet.html'},
    imgSourse: {type: String, trim: true, default: '/images/seagame/vn-seagame.jpg'},
    title: {type: String, trim: true, default: ''},
    categories: {type: String, trim: true, default: 'Seagame'},
    createdAt:  {type: String, trim: true, default: '1/1/1970'},
    isCarouselNews: {type: Boolean, default: false}
})

module.exports = mongoose.model('Tin', schema, 'NewsList')