import path from 'path';
import express from 'express'
import { Server } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

const router = express.Router();
router.get('/ping', async (req, res) => {
  console.log('/ping');
  res.send({ msg: 'pong' });
});

const app = express();
const server = new Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);

const clientRoot = path.join(process.cwd(), '../client/build');
app.use(express.static(clientRoot));
app.use('/static', express.static(`${clientRoot}/static`));
app.use((req, res) => {
  console.log(`path: ${req.path}`);
  return res.sendFile(`${clientRoot}/index.html`);
});

export default server;
