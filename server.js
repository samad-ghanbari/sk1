import express from 'express';
//import path from 'path';
import { handler } from './build/handler.js'; // The SSR handler from the SvelteKit build

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
	res.send('Hello from Express!');
});

// pass through all requests to the SvelteKit handler
// This will handle all routes and serve the SvelteKit app
app.use(handler);
// Serve the SvelteKit app

// Start the Express server
app.listen(port, () => {
	console.log(`Express server running at http://localhost:${port}`);
});
