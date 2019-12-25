// const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');
// logger.log('Message');
// logger('Message');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.write('Hello World');
    res.end();
  }
  if (req.url === '/api/courses'){
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});
// server.on('connection', (socket)=>{
//   console.log('New connection...');
// });
server.listen(3000);

console.log('Listening on port 3000...');

var pathObj = path.parse(__filename);

var osmem = os.totalmem();

const files = fs.readdirSync('./');

fs.readdir('./', function(err, files){
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

// const emitter = new EventEmitter();


const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});


logger.log('message');

// emitter.on('loggin', (arg)=>{
//   console.log('Logged callback', arg);
// });
//
// emitter.emit('loggin', { id: 2, url: 'url2' });

console.log(pathObj);

console.log(`Total Memory: ${osmem}`);

console.log(`Files: ${files}`);
