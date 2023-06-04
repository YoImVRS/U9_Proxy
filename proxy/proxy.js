const httpProxy = require('http-proxy');

const targetServer = 'SERVER IP';

const proxy = httpProxy.createProxyServer({
  target: targetServer,
  ws: true,
});

proxy.on('error', (err, req, res) => {
    console.error('An error has ocurrered in proxy server:', err);
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });
  res.end('An error has ocurrered. Try again later...');
});

const proxyPort = 8080; 
proxy.listen(proxyPort, () => {
  console.log('Proxy server online in port ', proxyPort);
});
