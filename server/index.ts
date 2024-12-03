import express, { Request, Response } from "express";
import dragonRoutes from "./routes/dragons";
import path from "path";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use('/dragons', dragonRoutes);

app.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

app.listen(port, () => {
  console.log(`Server is runing at http://localhost:${port}`);
});