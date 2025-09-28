import { parseRows } from "../../utils/parseRows.js";
import pool from "../pool.js";

class UserRepo {
    static async find() {
        const { rows } = await pool.query(`SELECT * FROM users`);
        const parsedRows = parseRows(rows);
        return parsedRows;
    }

    static async findById(id) {
        const { rows } = await pool.query(
            `SELECT * FROM users WHERE id = $1`, 
            [id]
        );
        const parsedRows = parseRows(rows);
        return parsedRows;
    }

    static async insert({ username, bio }) {
        const { rows } = await pool.query(
            `INSERT INTO users (username, bio) VALUES ($1, $2) RETURNING *`,
            [username, bio]
        );
        return parseRows(rows);
    }

    static async update() {

    }
}

export default UserRepo;