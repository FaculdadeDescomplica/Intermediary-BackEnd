import { createServer } from 'http';
import { readFile } from 'fs';

createServer(function (req, res) {
  readFile('demo-readfile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);