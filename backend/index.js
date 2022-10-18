import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from '../backend/config/database.js';
import router from '../backend/routes/index.js';
import bodyParser from 'body-parser';
import session from 'express-session';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('Database connected ...');
} catch (error) {
  console.log(error);
}

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  })
);
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
bodyParser.urlencoded({ extended: true });
app.use(express.json());
app.use(router);

app.use(
  session({
    key: 'userId',
    secret: 'tjop82374982ajdsfsaf',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.listen(5000, () => console.log('Server running at port 5000'));
