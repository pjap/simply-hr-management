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

// router.get('/', function(req,res ) {
//   Model.Employee.findAll({
//     order: [['id','ASC']]
//   })
//   .then(dataEmployee => {
//     res.render('employee/employee', {dataEmployee: dataEmployee, session: req.session})
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })

router.get('/', function(req,res ) {
  Model.Employee.findAll({
    order: [['id', 'ASC']]
  })
  .then(dataEmployee => {
    let promise = dataEmployee.map((employee) => {
      return new Promise((resolve,reject) => {
        employee.getJobPosition()
         .then(jobposition => {
           console.log('ini data jobposition', jobposition);
           if(jobposition) {
             employee.name_position = jobposition.name_position;
           } else {
             employee.name_position = '-- unassigned --';
           }
           resolve(employee);
         })
         .catch(err => {
           reject(err)
         })
      })
    })

    Promise.all(promise)
     .then(fixDataEmployee => {
      //  res.send(fixDataEmployee)
      res.render('employee/employee', {fixDataEmployee: fixDataEmployee, session: req.session})
     })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', function(req,res) {
  res.render('employee/add', {dataError: null, session: req.session})
})

router.post('/add', function(req,res) {
  Model.Employee.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    gender: req.body.gender,
    foto: req.body.foto,
    JobPositionId: req.body.JobPositionId
  })
  .then(() => {
    res.redirect('/employee')
  })
  .catch(err => {
      if (err.message == 'Validation error: Validation isEmail on email failed'){
        Model.Employee.findAll()
        .then(dataEmployee=> {
          res.render('employee/employee', {dataEmployee: dataEmployee, dataError: 'Email Tidak Valid', session: req.session})
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
    res.redirect('/employee')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', function(req,res) {
  Model.Employee.findById(req.params.id)
  .then(dataEmployee => {
    Model.JobPosition.findAll()
    .then(dataJobPosition => {
      res.render('employee/edit', { dataJobPosition: dataJobPosition ,dataEmployee: dataEmployee, dataError: null, session: req.session })
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', function(req,res) {
  Model.Employee.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    gender: req.body.gender,
    foto: req.body.foto,
    JobPositionId: req.body.JobPositionId
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/employee')
  })
  .catch(err => {
    if (err.message == 'Validation error: Validation isEmail on email failed'){
      Model.Employee.findAll()
      .then(dataEmployee=> {
        res.render('employee/add', {dataEmployee: dataEmployee, dataError: 'Email Tidak Valid', session: req.session})
      })
    }
  })
})

router.get('/uploadfoto/:id', function(req,res) {
  Model.Employee.findById(req.params.id)
  .then(dataEmployee => {
    res.render('employee/uploadfoto', { dataEmployee: dataEmployee, dataError: null, session: req.session })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/uploadfoto/:id',upload.any() , function(req,res) {
  Model.Employee.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    gender: req.body.gender,
    foto: req.files[0].filename
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/employee')
  })
  .catch(err => {
    if (err.message == 'Validation error: Validation isEmail on email failed'){
      Model.Employee.findAll()
      .then(dataEmployee=> {
        res.render('employee/add', {dataEmployee: dataEmployee, dataError: 'Email Tidak Valid', session: req.session})
      })
    }
  })
})

// router.get('/assign/:id', function(req,res) {
//   Model.Employee.findById(req.params.id)
//   .then(dataStudent => {
//     Model.Subject.findAll()
//     .then(dataSubject => {
//       // res.send(dataTeacher)
//       res.render('students/assign', { dataStudent: dataStudent, dataSubject: dataSubject, dataError: null, session: req.session })
//     })
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })
//
// router.post('/assign/:id', function(req,res) {
//   Model.StudentSubject.create({
//     StudentId: req.params.id,
//     SubjectId: req.body.SubjectId
//   },{
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(() => {
//     res.redirect('/students')
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })

module.exports = router
