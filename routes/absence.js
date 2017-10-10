const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get('/', function(req,res) {
  Model.Absence.findAll({
  })
  .then(dataAbsence => {
    console.log(dataAbsence);
    // res.render('absence/absence', {dataAbsence:dataAbsence})
    res.send(dataAbsence)
  })
})

router.post('/add',(req,res)=>{
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
})



module.exports = router
