const saveCtrl = {}

const pool = require('../config/database')

saveCtrl.saveData = async (req, res) => {
    const {department, city, name, email} = req.body

    const sqlQuery = `INSERT INTO contacts (name, email, state, city) VALUES ('${name}', '${email}', '${department}', '${city}')`
    console.log(sqlQuery)
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query(sqlQuery, (error, results) => {
                if (error) return reject(error);
                return resolve(results);
            });
        });
        req.flash('success_msg','Registro Almacenado')
        res.redirect('/')

    } catch (err) {
        console.log(err)
        req.flash('error_msg','Error Server')
        res.redirect('/')
    }


}

module.exports = saveCtrl