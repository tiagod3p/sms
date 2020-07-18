const db = require('../../config/db')
const { age, dateFormatted } = require('../../lib/utils')

module.exports = {
    select(callback) { 
        const query = `SELECT * FROM students ORDER BY name ASC`
        db.query(query, function(err, results) { 
            if (err) throw err
            
            callback(results.rows)
        })
    },

    add(data, callback) {
        const query = `
            INSERT INTO students (
                name,
                email,
                birth,
                gender,
                course,
                created_at,
                professor_id
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `
        const values = [
            data.name,
            data.email,
            dateFormatted(data.birth).iso,
            data.gender,
            data.course,
            dateFormatted(Date.now()).iso,
            data.professor_id
        ]

        db.query(query, values, function(err, results) { 
            if (err) throw err

            callback(results.rows[0])
    })
    },

    find(id, callback) { 
        db.query(
            `SELECT students.*, professors.name as professor_name 
            FROM students
            LEFT JOIN professors ON (professors.id = students.professor_id)
            WHERE students.id = $1 `,
            [id], 
            function(err, results) {
                if (err) throw err

                callback(results.rows[0])
            }
        )
    },

    findBy(filter, callback) {

        const query = `
        SELECT * FROM students 
        WHERE students.name ILIKE '%${filter}%'
        OR students.email ILIKE '%${filter}%'
        ORDER BY name ASC`
        
        db.query(query, function(err, results) { 
            if (err) throw err
            
            callback(results.rows)
        })

    },

    update(data, callback) {

        const query = `
        UPDATE students SET
        name=$1,
        email=$2,
        birth=$3,
        gender=$4,
        course=$5,
        professor_id=$6
        WHERE id=$7`

        const values = [
            data.name,
            data.email,
            dateFormatted(data.birth).iso,
            data.gender,
            data.course,
            data.professor_id,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if (err) throw(err)

            callback()
        })
    },

    delete(id, callback) {
        const query = `DELETE FROM students WHERE id=$1`
        const values = [id]

        db.query(query, values, function(err, results) {
            if (err) throw err

            callback()
        })

    },

    selectProfessor(callback) {
        db.query(`SELECT name, id FROM professors`, function(err, results) {
            if (err) throw err

            callback(results.rows)
        })
    },

    queryExecute(params) {
        let { filter, limit, offset, callback } = params

        let query = "",
            filterQuery = "",
            totalQuery = `
            SELECT count(*) as total
            FROM students`

        if (filter) {
            filterQuery = `
            WHERE students.name ILIKE '%${filter}%'
            OR students.email ILIKE '%${filter}%'`

            totalQuery += filterQuery
        }

        query =`
        SELECT students.*, (
            ${totalQuery}
        )
        FROM students
        ${filterQuery}
        ORDER BY students.name ASC
        LIMIT ${limit} OFFSET ${offset}
        ` 

        db.query(query, function(err, results) {
            if (err) throw err

            callback(results.rows)
        })


    }
 }