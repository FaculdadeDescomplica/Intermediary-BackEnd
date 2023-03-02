import { createServer } from 'http';
import { readFile } from 'fs';

createServer(function (req, res) {
  console.log("req" + req);
  console.log("res" + res);
  readFile('demo-readfile.html', function(err, data) {
    console.log("req" + err);
    console.log("res" + data);
  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  console.log("req" + req);
  console.log("res" + res);

}).listen(8080);