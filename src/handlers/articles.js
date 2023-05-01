import dotenv from 'dotenv';
import express from 'express';
import joi from 'joi';
import jwt from 'jsonwebtoken';
import jwtAuth from '../middleware/jwtAuth.js';
import Article from '../models/articles.js';
dotenv.config();

const art = new Article();

const articleSchema = joi.object({
	title: joi.string().required(),
	content: joi.string().required(),
	status: joi.string().required().valid('published', 'unpublished'),
});
const articleStatusSchema = joi.object({
	id: joi.number().required(),
	status: joi.string().required().valid('published', 'unpublished'),
});

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createArticle = async (req, res) => {
	try {
		await articleSchema.validateAsync(req.body);
		const authHeader = req.headers.authorization.split(' ')[1];
		const published_by = jwt.verify(
			authHeader,
			process.env.JWT_SECRET
		).username;
		const { title, content, status } = req.body;
		const article = await art.createArticle(
			title,
			content,
			status,
			published_by
		);
		res.status(201).json(article);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const changeArticleStatus = async (req, res) => {
	try {
		await articleStatusSchema.validateAsync(req.body);
		const { id, status } = req.body;
		const article = await art.changeArticleStatus(id, status);
		res.status(201).json(article);
	} catch (error) {
		console.log(req.body);
		res.status(400).json({ error: error.message });
	}
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const listArticles = async (req, res) => {
	try {
		const article = await art.listArticles();
		res.status(201).json(article);
	} catch (error) {
		console.log(req.body);
		res.status(400).json({ error: error.message });
	}
};

/**
 * @param {express.Application} app
 */
const articleRouter = (app) => {
	app.post('/articles', jwtAuth, createArticle);
	app.put('/articles/status', jwtAuth, changeArticleStatus);
	app.get('/articles', jwtAuth, listArticles);
};

export default articleRouter;
