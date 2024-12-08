const pool = require('../../database/pool')

module.exports = async (telegram_id) => {

    const query = `SELECT * FROM users WHERE telegram_id = ${telegram_id}`
    const client = await pool.connect()
    try {
        return await client.query(query)
    } catch (err) {
        console.error("Error finding data: ", err.message)
    } finally {
        client.release()
    }
}