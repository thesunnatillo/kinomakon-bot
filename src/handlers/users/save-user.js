const pool = require("../../database/pool")
const getUser = require("./get-user")

module.exports = async (telegram_id, name, username) => {
    const user = await getUser(telegram_id)
    const query = `INSERT INTO users (telegram_id, name, username, created_at)
                    VALUES ($1, $2, $3, NOW())`

    if (user.rows.length === 0) {
        const client = await pool.connect()
        try {
            await client.query(query, [telegram_id, name, username])
        } catch (err) {
            console.error("Error saving data: ", err.message)
        } finally {
            client.release()
        }
    }
}