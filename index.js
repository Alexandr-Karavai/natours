// const express = require('express');
// const path = require('path');
// const fs = require('fs');

// const PORT = process.env.PORT || 5000;

// const app = express();

// const human = [{ user: 'tobi' }, { user: 'loki' }, { user: 'rocky' }];

// app.use(function(req, res, next) {
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let data = `Date ${hour}:${minutes}:${seconds} Method ${req.method} URL ${
//         req.url
//     } ${req.get('user-agent')}`;
//     console.log(data);
//     fs.appendFile('server.log', data + '\n', err => {
//         if (err) throw err;
//         console.log(`${hour}:${minutes}:${seconds} logged`);
//     });
//     next();
// });

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/test/:id', (req, res) => {
//     if (human[req.params.id]) {
//         res.setHeader('Content-Type', 'aplication/json');
//         res.json(human[req.params.id]);
//         res.end();
//     } else {
//         res.status(404).send('Not found');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server has benn started on ${PORT} port`);
// });

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('new', () => {
//     console.log('sjdf');
// });

// myEmitter.emit('new');
// const fs = require('fs');
// const server = require('http').createServer();

// server.on('request', (req, res) => {
//     // fs.readFile('test-file.txt', (err, data) => {
//     //     if (err) console.log(err);
//     //     res.end(data);
//     // });

//     // Solution 2: Streams
//     const readable = fs.createReadStream('test-file.txt');
//     readable.on('data', chunk => {
//         res.write(chunk);
//     });
//     readable.on('end', () => {
//         res.end();
//     });
//     readable.on('error', err => {
//         console.log(err);
//         res.statusCode = 500;
//         res.end('File not found!');
//     });
// });

// // server.on('request', (req, res) => {
// //     console.log('Another request 😀');
// // });

// // server.on('close', () => {
// //     console.log('Server closed');
// // });

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Waiting for requests...');
// });
// console.log(arguments);

// console.log(require('module').wrapper);

const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, rejecct) => {
        fs.readFile(file, (err, data) => {
            if (err) rejecct('Not found file!');
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, rejecct) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Could not write file');
            resolve('Success');
        });
    });
};

readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        return superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('img-dog.txt', res.body.message);
    })
    .then(() => {
        console.log('Img saved to file');
    })
    .catch(err => console.log(err.message));
