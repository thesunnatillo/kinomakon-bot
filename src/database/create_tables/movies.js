const pool = require("../pool");

module.exports = async () => {
    const query = `CREATE TABLE IF NOT EXISTS movies (
        id SERIAL PRIMARY KEY,
        movie_id VARCHAR(1000) NOT NULL,
        caption VARCHAR(1000) NOT NULL,
        view INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
    try {
        const client = await pool.connect();
        await client.query(query);
        console.log('[MOVIES] Table created successfully!');
        client.release();
    } catch (err) {
        console.error('Error creating table:', err.message);
    }
}