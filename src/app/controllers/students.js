const { age, dateFormatted } = require('../../lib/utils')
const Student = require('../models/Student')

module.exports = {
    index(req, res) {
        let { filter, p, limit} = req.query

        p = p || 1
        limit = limit || 2
        let offset = limit*(p-1)

        const params =  {
            p,
            limit,
            filter, 
            offset,
            callback(students) {

                let totalPages = 1

                if (!students[0]) {
                    totalPages = totalPages
                } else {
                    totalPages = Math.ceil( students[0].total / limit ) 
                }

                const paginate = {
                    selectedPage: p,
                    totalPages
                }
                return res.render('students/index', { students, filter, paginate, limit })


            }
        }

        Student.queryExecute(params)

    },
    add(req, res) {

        Student.selectProfessor(function(professors) {
            return res.render('students/add', { professors } )
        })

    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") return res.send('Please, fill in all fields.')
        }

        Student.add(req.body, function(student) {
            return res.redirect(`/students/${student.id}`)
        })
        return
    },
    show(req, res) {
        const id = req.params.id

        Student.find(id, function(student) {

            if (!student) return res.send("Student not found!")

            student.birth = dateFormatted(student.birth).birthDay
            student.created_at = dateFormatted(student.created_at).formatUS
            return res.render('students/show', { student } )
        })
    },

    edit(req, res) {
        const id = req.params.id

        Student.find(id, function(student) {

            if (!student) return res.send("Student not found!")

            student.birth = dateFormatted(student.birth).iso

            Student.selectProfessor(function(professors) {
                return res.render('students/edit', { student, professors } )
            })
        })
    },

    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") return res.send('Please, fill in all fields.')
        }

        Student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })

    },

    delete(req, res) {
        Student.delete(req.body.id, function() {
            return res.redirect(`/students`)
        } )
    }
}
