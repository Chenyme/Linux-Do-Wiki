const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use('/api/linuxdo', createProxyMiddleware({
        target: 'https://linux.do',
        changeOrigin: true,
        pathRewrite: {
            '^/api/linuxdo': '',
        },
    }));
    server.use('/image/linuxdo', createProxyMiddleware({
        target: 'https://linux.do',
        changeOrigin: true,
        pathRewrite: {
            '^/image/linuxdo': '',
        },
        headers: {
            'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Referer': 'https://linux.do'
        }
    }));


    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});