import express from 'express';
import { createServer as createViteServer } from 'vite';

const parts1 = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Rick&Morty</title></head><body><div id="root">`;
const parts2 = `</div><script type="module" src="/src/entry-client.tsx"></script></body></html>`;

const port = 3000;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use(async (req, res) => {
    res.write(parts1);
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const stream = render(req.url, {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.write(parts2);
        res.end();
      },
    });
  });

  app.listen(port);
}

createServer();
