import express, { Request, Response } from 'express';

const app = express();
const port = 5544;

interface PingResponse {
  message: string;
  status: 'unimplemented';
}

app.get('/', (req: Request, res: Response<PingResponse>) => {
  const homeResponse: PingResponse = {
    message: 'This endpoint is not yet implemented',
    status: 'unimplemented',
  }
  res
    .setHeader('Content-Type', 'application/json')
    .send(homeResponse);
});

// Add other routes as required under api namespace.

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});