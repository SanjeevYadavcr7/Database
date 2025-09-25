import pg from 'pg';

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'veejnas7',
    password: ''
});

pool.query(`
    UPDATE posts
    SET loc = POINT(lng, lat)
    WHERE loc IS NULL;    
`).then(() => {
    console.log('Migration completed successfully.');
}).catch(err => {
    console.error(err.message);
}).finally(() => {
    pool.end();
})