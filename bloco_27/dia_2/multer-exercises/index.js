require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const services = require('./services');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/uploads`));

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return callback(null, false);
  }

  if (services.fileExists(file.originalname)) {
    req.fileExistsError = true;
    return callback(null, false);
  }
  
  callback(null, true);
};

const upload = multer({ storage: fileStorage, fileFilter });

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), controllers.upload);

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
});

const multipleUpload = multer({ storage: defaultStorage });

app.post('/multiple', multipleUpload.array('files'), controllers.multiple);

// const profileStorage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'profilePics');
//   },
// });

// if the conditions are default it is not necessary to create
// const profileUpload = multer({ storage: profileStorage });
app.get('/profiles/:id', controllers.getProfiles);

app.post('/profile', multer({ dest: 'profilePics' })
.single('profilePic'), controllers.createProfile);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
