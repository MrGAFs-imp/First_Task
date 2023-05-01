import { log } from 'console';
import Article from '../models/articles.js';

describe('Article Testing', () => {
	let article = new Article();
	const articleTest = [
		{
			title: 'Test Title',
			content: 'Test Content',
			status: 'published',
			published_by: 'mrgafs',
		},
		{
			title: 'Test Title 1',
			content: 'Test Content 1',
			status: 'unpublished',
			published_by: 'imperial studios',
		},
	];
	const articleTestRes = [
		{
			id: 1,
			title: 'Test Title',
			content: 'Test Content',
			status: 'published',
			published_by: 'mrgafs',
		},
		{
			id: 2,
			title: 'Test Title 1',
			content: 'Test Content 1',
			status: 'unpublished',
			published_by: 'imperial studios',
		},
	];

	it('testing article adding 1', async () => {
		const { title, content, status, published_by } = articleTest[0];
		const res = await article.createArticle(
			title,
			content,
			status,
			published_by
		);
		expect(res).toEqual(articleTestRes[0]);
	});
	it('testing article adding 2', async () => {
		const { title, content, status, published_by } = articleTest[1];
		const res = await article.createArticle(
			title,
			content,
			status,
			published_by
		);
		expect(res).toEqual(articleTestRes[1]);
	});
	it('changing article status', async () => {
		const res = await article.changeArticleStatus(2, 'published');
		articleTestRes[1].status = 'published';
		expect(res).toEqual(articleTestRes[1]);
	});
	it('listing published articles', async () => {
		const res = await article.listArticles();
		expect(res[0].title).toEqual(articleTestRes[0].title);
		expect(res[1].title).toEqual(articleTestRes[1].title);
	});
});
