const express = require('express')
const router = express.Router()
const Model = require('../models')


// router.use((req, res, next)=>{
//   console.log("==== MASUK STUDENT", req.session);
//   if(req.session.role === 'teacher' || req.session.role === 'academic' || req.session.role === 'headmaster' ){
//     next()
//   }else {
//     res.redirect('/')
//   }
// })
//
router.get('/', function(req,res ) {
  Model.Rule.findAll({
    order: [['id','ASC']]
  })
  .then(dataRules => {
    res.render('rule/rule', {dataRules: dataRules, session: req.session})
  })
  .catch(err => {
    res.send(err)
  })
})
//
router.get('/add', function(req,res) {
  res.render('rule/add', {dataError: null, session: req.session})
})

router.post('/add', function(req,res) {
  Model.Rule.create({
    ket_rules: req.body.ket_rules,
    deduction: req.body.deduction,
  })
  .then(() => {
    res.redirect('/rule')
  })
  .catch(err => {
      if (err.message == 'Validation error: Validation isEmail on email failed'){
        Model.Rule.findAll()
        .then(dataRules=> {
          res.render('rule/rule', {dataRules: dataRules, dataError: 'Email Tidak Valid', session: req.session})
        })
      }
    })
  })

router.get('/delete/:id', function(req,res) {
  Model.Rule.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/rule')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', function(req,res) {
  Model.Rule.findById(req.params.id)
  .then(dataRules => {
    res.render('rule/edit', { dataRules: dataRules, dataError: null, session: req.session })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', function(req,res) {
  Model.Rule.update({
    ket_rules: req.body.ket_rules,
    deduction: req.body.deduction,
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/rule')
  })
  .catch(err => {
    if (err.message == 'Validation error: Validation isEmail on email failed'){
      Model.Rule.findAll()
      .then(dataRules=> {
        res.render('rule/add', {dataRules: dataRules, dataError: 'Email Tidak Valid', session: req.session})
      })
    }
  })
})

module.exports = router
