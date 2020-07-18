const express = require('express')
const professors = require('./app/controllers/professors')
const students = require('./app/controllers/students')

const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect('/professors?p=1&limit=2')
})

routes.get('/professors', professors.index)
routes.get('/professors/add', professors.add)
routes.get('/professors/:id', professors.show)
routes.get('/professors/:id/edit', professors.edit)
routes.post('/professors', professors.post)
routes.put('/professors', professors.put)
routes.delete('/professors', professors.delete)

routes.get('/students', students.index)
routes.get('/students/add', students.add)
routes.get('/students/:id', students.show)
routes.get('/students/:id/edit', students.edit)
routes.post('/students', students.post)
routes.put('/students', students.put)
routes.delete('/students', students.delete)

module.exports = routes