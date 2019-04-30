var express = require('express');
var router = express.Router();
const posts  = require('../models').Post;
/* GET users listing. */
router.get('/posts', function(req, res, next) {
  posts.findAll().then( result => {
      res.json(result)
      console.log(result)
      next()
  })
});
router.get('/post/:id', function(req, res, next) {
    console.log(req.params.id)
    posts.findByPk({ where: { id:id }}).then( result => 
    res.json(result))
});
router.post('/', function(req, res, next) {
    posts.create(req.body).then( result => {
        res.json(result)
        console.log(result)
        next()
    })
    .catch(error => {
        res.status(500)
        console.log(err)
    })
});
router.put('/post/:id', function(req, res, next) {
    posts.update(req.body).then( result => {
        res.json(result)
        res.status(200)
        next();
    });
router.delete('/post/:id', function(req, res, next) {
    posts.destroy(req.params.id).then( result => {
        res.json(result)
        res.status(200)
        next();
    })
});
})

module.exports = router;
