import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import bodyParser from 'body-parser';
mongoose.connect('mongodb://localhost:27017/devcoffee', () => {
	console.log('connected to mongodb...');
});
const app = express();
// middleware
app.use(bodyParser.json());
app.use('/api', routes);

export default app;
