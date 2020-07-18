const { age, dateFormatted } = require('../../lib/utils')
const Professor = require('../models/Professor')

module.exports = {
    index(req, res) {
        let { filter, p, limit } = req.query

        // if p!=0, p = p, else p = 1
        p = p || 1

        limit = limit || 5

        let offset = limit * (p - 1)

        const params = {
            limit,
            offset,
            filter,
            callback(professors) {

                if (!professors[0]) {
                    totalPages = 1
                } else {
                    totalPages =  Math.ceil(professors[0].total / limit)
                }

                const paginate = {
                    selectedPage: p,
                    totalPages
                }

                return res.render('professors/index', { professors, paginate, filter, limit })
            }
        }
        Professor.queryExecute(params)

    },
    add(req, res) {
        return res.render('professors/add')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") return res.send('Please, fill in all fields.')
        }

        Professor.add(req.body, function(professor) {
            return res.redirect(`/professors/${professor.id}`)
        })

    },

    show(req, res) {
        const id = req.params.id

        Professor.find(id, function(professor) {

            if (!professor) return res.send("Professor not found!")

            professor.age = age(professor.birth)
            professor.createdAt = dateFormatted(professor.created_at).formatUS

            return res.render('professors/show', { professor } )
        })
    },

    edit(req, res) {
        const id = req.params.id

        Professor.find(id, function(professor) {

            if (!professor) return res.send("Professor not found!")

            professor.birth = dateFormatted(professor.birth).iso

            return res.render('professors/edit', { professor } )
        })
    },

    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") return res.send('Please, fill in all fields.')
        }

        Professor.update(req.body, function() {
            return res.redirect(`/professors/${req.body.id}`)
        })

    },

    delete(req, res) {
        Professor.delete(req.body.id, function() {
            return res.redirect(`/professors`)
        } )
    }
}
