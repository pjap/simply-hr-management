const express = require('express')
const router = express.Router()
const Model = require('../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images/employees' })

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
  Model.JobPosition.findAll({
    order: [['id','ASC']]
  })
  .then(dataPosition => {
    res.render('jobposition/jobposition', {dataPosition: dataPosition, session: req.session})
  })
  .catch(err => {
    res.send(err)
  })
})
//
router.get('/add', function(req,res) {
  res.render('jobposition/add', {dataError: null, session: req.session})
})

router.post('/add', function(req,res) {
  Model.JobPosition.create({
    name_position: req.body.name_position,
    salary: req.body.salary,
  })
  .then(() => {
    res.redirect('/jobposition')
  })
  .catch(err => {
      if (err.message == 'Validation error: Validation isEmail on email failed'){
        Model.JobPosition.findAll()
        .then(dataPosition=> {
          res.render('employee/employee', {dataPosition: dataPosition, dataError: 'Email Tidak Valid', session: req.session})
        })
      }
    })
  })

router.get('/delete/:id', function(req,res) {
  Model.Employee.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/jobposition')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', function(req,res) {
  Model.JobPosition.findById(req.params.id)
  .then(dataPosition => {
    res.render('jobposition/edit', { dataPosition: dataPosition, dataError: null, session: req.session })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', function(req,res) {
  Model.JobPosition.update({
    name_position: req.body.name_position,
    salary: req.body.salary,
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/jobposition')
  })
  .catch(err => {
    if (err.message == 'Validation error: Validation isEmail on email failed'){
      Model.JobPosition.findAll()
      .then(dataPosition=> {
        res.render('jobposition/add', {dataPosition: dataPosition, dataError: 'Email Tidak Valid', session: req.session})
      })
    }
  })
})

module.exports = router
