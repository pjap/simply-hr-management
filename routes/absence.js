const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get('/', function(req,res) {
  Model.Absence.findAll({
    attributes: [['id','id'],['date','date'],['checkin','checkin'],['checkout','checkout'],['EmployeeId','EmployeeId'],
                  ['RuleId','RuleId'],['JobPositionId','JobPositionId']],
    include: [Model.Employee, Model.Rule, Model.JobPosition]
  })
  .then(dataAbsence => {
    Model.Employee.findAll()
    .then(dataEmployee => {
      Model.Rule.findAll()
      .then(dataRule => {
        Model.JobPosition.findAll()
        .then(dataJobPosition => {
          // console.log(dataAbsence);
          // res.send(dataAbsence)
          res.render('absence/absence', {dataEmployee: dataEmployee, dataAbsence:dataAbsence,dataRule: dataRule,dataJobPosition:dataJobPosition, dataError: null})
        })
      })
    })
  })
})

router.post('/',(req,res)=>{
  Model.Absence.findOne({
    where : {
      date: req.body.date,
      EmployeeId: req.body.EmployeeId
    }
  })
  .then(data => {
    if(data) {
      Model.Absence.findAll({
        attributes: [['id','id'],['date','date'],['checkin','checkin'],['checkout','checkout'],['EmployeeId','EmployeeId'],
                      ['RuleId','RuleId'],['JobPositionId','JobPositionId']],
        include: [Model.Employee, Model.Rule, Model.JobPosition]
      })
      .then(dataAbsence => {
        Model.Employee.findAll()
        .then(dataEmployee => {
          Model.Rule.findAll()
          .then(dataRule => {
            Model.JobPosition.findAll()
            .then(dataJobPosition => {
              // console.log(dataAbsence);
              // res.send(dataAbsence)
              // res.redirect('/absence')
              res.render('absence/absence', {dataEmployee: dataEmployee, dataAbsence:dataAbsence,dataRule: dataRule,dataJobPosition:dataJobPosition, dataError: 'ID SUDAH DI GUNAKAN'})
            })
          })
        })
      })
    } else {
      Model.Absence.create({
        date: req.body.date,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        EmployeeId: req.body.EmployeeId,
        RuleId: req.body.RuleId,
        JobPositionId: req.body.JobPositionId
      })
      .then(dataAbsence=>{
        res.redirect('/absence')
        // res.send(dataAbsence)
      })
      .catch(err=>{
        res.send(err)
      })
    }
  })
})

router.get('/delete/:id', function(req,res) {
  Model.Absence.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/absence')
  })
  .catch(err => {
    res.send(err)
  })
})


router.get('/edit/:id', function(req,res) {
  Model.Absence.findAll({
    attributes: [['id','id'],['date','date'],['checkin','checkin'],['checkout','checkout'],['EmployeeId','EmployeeId'],
                  ['RuleId','RuleId'],['JobPositionId','JobPositionId']],
    include: [Model.Employee, Model.Rule, Model.JobPosition]
  })
  .then(dataAbsence => {
    Model.Employee.findAll()
    .then(dataEmployee => {
      Model.Rule.findAll()
      .then(dataRule => {
        Model.JobPosition.findAll()
        .then(dataJobPosition => {
          // console.log(dataAbsence);
          // res.send(dataAbsence)
          res.render('absence/edit', {dataEmployee: dataEmployee, dataAbsence:dataAbsence,dataRule: dataRule,dataJobPosition:dataJobPosition, dataError: null})
        })
      })
    })
  })
})

router.get('/report', function(req,res) {
  Model.Absence.findAll({
    attributes: [['id','id'],['date','date'],['checkin','checkin'],['checkout','checkout'],['EmployeeId','EmployeeId'],
                  ['RuleId','RuleId'],['JobPositionId','JobPositionId']],
    include: [Model.Employee, Model.Rule, Model.JobPosition]
  })
  .then(dataAbsence => {
    Model.Employee.findAll()
    .then(dataEmployee => {
      res.render('absence/report', {dataAbsence: dataAbsence, dataEmployee: dataEmployee})
      // res.send(dataAbsence)
    })
  })
  .catch(err => {
    res.send(err)
  })
})





module.exports = router
