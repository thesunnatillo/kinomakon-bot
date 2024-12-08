const pool = require("../pool")

module.exports = async () => {
    const query = `CREATE TABLE IF NOT EXISTS channels (
        id SERIAL PRIMARY KEY,
        name VARCHAR(500) NOT NULL,
        url VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
    try {
        const client = await pool.connect();
        await client.query(query);
        console.log('[CHANNELS] Table created successfully!');
        client.release();
    } catch (err) {
        console.error('Error creating table:', err.message);
    }
}