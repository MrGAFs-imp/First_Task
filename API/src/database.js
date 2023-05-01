import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();
class db {
	constructor() {
		try {
			this.pool = mysql.createPool({
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWD,
				database: process.env.DB_NAME,
				multipleStatements: true,
			});
		} catch (error) {
			throw Error(
				`can not connect to the database due to error: ${error}`
			);
		}
	}
	/**
	 * @param {string} qr the query string
	 * @returns the result of the query
	 */
	async query(qr) {
		return await this.pool.query(qr);
	}
}

export default db;
