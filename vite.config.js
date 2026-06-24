import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function vercelApiPlugin() {
  return {
    name: 'vercel-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/verify', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        const body = await new Promise((resolve, reject) => {
          let data = '';
          req.on('data', (chunk) => (data += chunk));
          req.on('end', () => {
            try { resolve(JSON.parse(data)); }
            catch { reject(new Error('Invalid JSON')); }
          });
        });

        const { default: handler } = await server.ssrLoadModule('/api/verify.js');

        const mockReq = { method: req.method, body };
        const mockRes = {
          _status: 200,
          status(code) { this._status = code; return this; },
          json(data) {
            res.statusCode = this._status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          },
        };

        handler(mockReq, mockRes);
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: mode === 'gh-pages' ? '/harden/' : '/',
  plugins: [vercelApiPlugin(), react()],
}));
