const fs = require('fs');
const http = require('http');
const os = require('os');

const { data } = require('./data');

// console.log(global);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(exports);
// console.log(module.exports === exports);

// const content = fs.readFileSync('./data.js', 'utf8');
// console.log(content);

// fs.readFile('./data.js', 'utf8', (err, content) => {
//   console.log(content);
// });

http
  .createServer(function (req, res) {
    console.log({ req });
    const x = {
      time: (os.uptime() / 60).toFixed(2),
    };
    const xx = JSON.stringify(x);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(xx);
    res.end();
  })
  .listen(8080, 'localhost', undefined, () => {
    console.log(`server started at 8080`);
  });

console.log(data);
