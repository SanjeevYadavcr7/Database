import app from "./src/app.js";
import pool from "./src/pool.js";

const PORT = process.env.PORT || 3000;

pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'veejnas7',
    password: ''
}).then(() => {
    console.log('Connected to the database');
    app().listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection error:', err);
})