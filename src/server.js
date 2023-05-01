import bodyParser from 'body-parser';
import express from 'express';
import articleRouter from './handlers/articles.js';

const PORT = 4000;
const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
	res.send('Hello World!');
});

articleRouter(app);

app.listen(PORT, () => {
	console.log(`Example app listening on http://localhost:${PORT}`);
});

export default app;
