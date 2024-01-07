import express from 'express';
import cors from 'cors';

const expressServer = express();

expressServer.use(express.json());
expressServer.use(cors());

expressServer.get('/', (req, res) => {
  res.json({ success: 'Ok' });
});

export { expressServer };
