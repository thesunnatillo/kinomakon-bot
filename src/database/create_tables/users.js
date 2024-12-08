const pool = require('../pool')

module.exports = async () => {
    const query = `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        telegram_id BIGINT NOT NULL,
        name VARCHAR(500) NOT NULL,
        username VARCHAR(100),
        isAdmin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
    try {
        const client = await pool.connect();
        await client.query(query);
        console.log('[USERS] Table created successfully!');
        client.release();
    } catch (err) {
        console.error('Error creating table:', err.message);
    }
}