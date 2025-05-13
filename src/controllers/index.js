const connection = require('../controllers/database');

const getConnectionData = async (req, res) => {
    const { nombre } = req.params;

    try {
        const [rows] = await connection.query(
            'SELECT * FROM servers WHERE nombre = ?',
            [nombre] // <-- parámetro seguro, evita SQL injection
        );

        if (rows.length === 0) {
            return res.status(200).send({ message: 'No se encontró el servidor', success: false });
        }

        return res.status(200).send({ message: 'Servidor encontrado', success: true, server: rows[0]?.servidor });

    } catch (err) {
        console.error('Error al consultar la base de datos:', err);
        return res.status(500).send({ message: 'Ocurrió un error en la base de datos', success: false });
    }
};

module.exports = { getConnectionData };