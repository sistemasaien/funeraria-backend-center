const connection = require('../controllers/database');

const getConnectionData = async (req, res) => {
    //get nombre from req params
    const { nombre } = req.params;
    const response = await connection.query(`SELECT * FROM servers where nombre = '${nombre}'`, function (err, rows) {
        if (rows) {
            if (rows.length === 0) {
                res.status(200).send({ message: 'No se encontró el servidor', success: false });
            } else {
                res.status(200).send({ message: 'Servidor encontrado', success: true, server: rows[0]?.servidor });
            }

        } else {
            res.status(200).send({ message: 'Ocurrió un error', success: false });
        }
    });
}


module.exports = { getConnectionData }
