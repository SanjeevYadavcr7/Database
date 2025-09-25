import pg from 'pg';
import express from 'express';

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'veejnas7',
    password: ''
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/posts', async (req, res) => {
    const { rows } = await pool.query(`
        SELECT * FROM posts
    `);
    res.send(`
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                ${ rows.map(row => {
                    return `
                    <tr>
                        <td>${row.id}</td>
                        <td>${row.loc.x}, ${row.loc.y}</td>
                    </tr>
                `
                }).join('')}
            </tbody>
        </table>
        <form method="POST">
            <h3> Create Post </h3>
            <div>
                <label> Longitude </label>
                <input name="lng" />
            </div>
            <div style="margin-top: 12px">
                <label style="margin-right: 12px;"> Latitude </label>
                <input name="lat" />
            </div>
            <button type="submit"> Create </button>
        </form>
    `);
})

app.post('/posts', async (req, res) => {
    const { lat, lng } = req.body;
    await pool.query(
        'INSERT INTO posts (loc) VALUES ($1);',
        [`(${lng}, ${lat})`]
    );
    res.redirect('/posts');
})


app.listen(8000, () => {
    console.log(`Server listening on port 8000`);
})