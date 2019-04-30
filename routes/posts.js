var express = require('express')
var router = express.Router()
const posts = require('../models').Post

/* GET users listing. */
router.get('/all', function (req, res, next) {
  posts.findAll().then(result => {
    res.json(result)
    console.log(result)
    next()
  })
})
router.get('/post/:id', function (req, res, next) {
  posts.findOne({ model: posts, where: { id: req.params.id } }).then(result =>
    res.json(result))
})
router.post('/', function (req, res, next) {
  posts.create(req.body).then(result => {
    res.json(result)
    console.log(result)
    next()
  })
})
router.put('/update/:id', function (req, res, next) {
  const data = {
    title: req.params.title,
    post: req.params.post,
    postedBy: req.params.postedBy
  }
  posts.update(data, { where: { id: req.params.id } }).then(result => {
    res.json(result)
    res.status(200)
    next()
  })
})
router.delete('/delete/:id', function (req, res, next) {
  const id = req.params.id
  if (!id) {
    console.log('The id is nowhere to be found. pls try with diiff no now')
  }
  console.log(id)
  posts.destroy({ where: { id: id } }).then(result => {
    res.status(200)
    res.json(result)
    
  })
})

module.exports = router
