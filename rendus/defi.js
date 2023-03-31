const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({message: 'hello world'}));
  res.end();
});

server.listen(3000, () => {
  console.log('Le serveur est en cours d\'écoute sur le port 3000...');
});
