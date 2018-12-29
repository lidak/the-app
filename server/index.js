const next = require('next');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser());

  server.use('/users', require('./usersController'));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;

    if (dev) {
      console.log();
    }
  });
});
