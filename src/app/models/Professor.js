const db = require('../../config/db')
const { age, dateFormatted } = require('../../lib/utils')

module.exports = {
    select(callback) { 
        const query = `
        SELECT professors.*, count(students) as total_students
        FROM professors
        LEFT JOIN students ON (professor_id = professors.id)
        GROUP BY professors.id
        ORDER BY total_students DESC`
        
        db.query(query, function(err, results) { 
            if (err) throw err
            
            callback(results.rows)
        })
    },

    add(data, callback) {
        const query = `
            INSERT INTO professors (
                name,
                birth,
                gender,
                services,
                years,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `
        const values = [
            data.name,
            dateFormatted(data.birth).iso,
            data.gender,
            data.services,
            data.years,
            dateFormatted(Date.now()).iso
        ]

        db.query(query, values, function(err, results) { 
            if (err) throw err

            callback(results.rows[0])
    })
    },

    find(id, callback) { 
        db.query(
            `SELECT * FROM professors 
            WHERE id = $1`,
            [id], 
            function(err, results) {
                if (err) throw err

                callback(results.rows[0])
            }
        )
    },

    update(data, callback) {

        const query = `
        UPDATE professors SET
        name=$1,
        birth=$2,
        gender=$3,
        services=$4,
        years=$5
        WHERE id=$6`

        const values = [
            data.name,
            data.birth,
            data.gender,
            data.services,
            data.years,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if (err) throw err

            callback()
        })
    },

    delete(id, callback) {
        const query = `DELETE FROM professors WHERE id=$1`
        const values = [id]

        db.query(query, values, function(err, results) {
            if (err) throw err

            callback()
        })

    },

    queryExecute(params) { 
        let { limit, offset, filter, callback} = params

        let query = "",
            filterQuery = "",
            totalQuery = "SELECT count(*) as total FROM professors"

        if (filter) {

            filterQuery = `
            WHERE professors.name ILIKE '%${filter}%'
            OR professors.services ILIKE '%${filter}%'`

            totalQuery = `
            SELECT count(*) as total FROM professors
            ${filterQuery}`
        }

        query += `
        SELECT professors.*, (
            ${totalQuery}
        ), count(students) as total_students
        FROM professors
        LEFT JOIN students ON (students.professor_id = professors.id)
        ${filterQuery}
        GROUP BY professors.id
        LIMIT ${limit} OFFSET ${offset}`

        db.query(query, function(err, results) { 
            if (err) throw err

            callback(results.rows)
        })

    }
    
}