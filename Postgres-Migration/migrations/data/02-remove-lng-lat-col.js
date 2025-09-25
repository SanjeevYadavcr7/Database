import pg from 'pg';

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'veejnas7',
    password: ''
});

pool.query(`
    ALTER TABLE posts
    DROP COLUMN lng,
    DROP COLUMN lat
`).then(() => {
    console.log('Columns lng and lat removed successfully.');
}).catch(err => {
    console.error(err.message);
}).finally(() => {
    pool.end();
})