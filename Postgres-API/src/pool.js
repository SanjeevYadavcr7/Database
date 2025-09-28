import pg from 'pg';

class Pool {
    _pool = null;

    connect(config) {
        this._pool = new pg.Pool(config);
        return this._pool.query(`SELECT 1+1 AS result`); // Test query to verify connection
    }

    close() {
        return this._pool.end();
    }

    query(sqlCommand, params = []) {
        return this._pool.query(sqlCommand, params)
    }
}

export default new Pool();