import bodyParser from 'body-parser';
import express from 'express';

const PORT = 4000;
const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Example app listening on http://localhost:${PORT}`);
});
