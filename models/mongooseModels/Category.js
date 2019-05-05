const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {type: String, trim:true, default: 'Tin the '},
    imgUrl: {type: String, trim:true, default: '/images/logo/budesliga-logo.png'},
    link: {type: String, trim: true, default: '/tinSeagame'},
    createdAt: {type: String, trim:true, default: '1/1/1970'}
})

module.exports = mongoose.model('Category', schema, 'Categories')