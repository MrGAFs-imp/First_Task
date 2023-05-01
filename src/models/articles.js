import dbClass from '../database.js';

const db = new dbClass();

class Article {
	/**
	 * @param {string}title the title of the article
	 * @param {string}content the content of the article
	 * @param {('published'|'unpublished')}status the statuses of the article
	 * @param {string}publishedBy the publisher name
	 * @return {json} the JSON representation of the article
	 */
	async getArticleById(id) {
		try {
			const query = `SELECT id, title, content, status, published_by FROM articles WHERE id = ${id};`;
			return await db.query(query);
		} catch (err) {
			throw err;
		}
	}
	async createArticle(title, content, status, publishedBy) {
		try {
			const query = `INSERT INTO articles(title, content, status, published_by) 
        VALUES("${title}", "${content}", "${status}", "${publishedBy}");`;
			const result = (await db.query(query))[0].insertId;
			return (await this.getArticleById(result))[0][0];
		} catch (err) {
			throw err;
		}
	}
	/**
	 *
	 * @param {number} articleId
	 * @param {('published'| 'unpublished')} status
	 * @returns
	 */
	async changeArticleStatus(articleId, status) {
		try {
			const query = `UPDATE articles SET status = "${status}" WHERE id = ${articleId};`;
			return await db
				.query(query)
				.then(async () => (await this.getArticleById(articleId))[0][0]);
		} catch (err) {
			throw err;
		}
	}
	/**
	 *
	 * @returns the list of articles
	 */
	async listArticles() {
		try {
			const query = 'SELECT * FROM articles where status = "published";';
			return (await db.query(query))[0];
		} catch (err) {
			throw err;
		}
	}
}

export default Article;
