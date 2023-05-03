import express from 'express';
import { createServer as createViteServer } from 'vite';

const port = 3000;

const temp = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Rick&Morty</title></head><body><div id="root">
    <!--ssr-->
    </div><script type="module" src="/src/entry-client.tsx"></script></body></html>`;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use(async (req, res) => {
    const url = req.originalUrl;

    try {
      const template = await vite.transformIndexHtml(url, temp);
      const renderedHtml = template.split(`<!--ssr-->`);

      res.write(renderedHtml[0]);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const stream = render(req.url, {
        onShellReady() {
          stream.pipe(res);
        },
        onAllReady() {
          res.write(renderedHtml[1]);
          res.end();
        },
      });
    } catch (error: unknown) {
      vite.ssrFixStacktrace(error as Error);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
