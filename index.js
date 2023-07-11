const PORT = 8080;
const UPLOAD_DIR = 'public';
const ENDPOINT = '/upload';
const APIKey = 'myapi';


const http = require('http');
const express = require('express');
const multer = require('multer');
const AdmZip = require('adm-zip');


const app = express();
const server = http.createServer(app);

// Set up multer middleware to handle file upload
const upload = multer({ dest:   `${__dirname}/${UPLOAD_DIR}` });

app.use(express.static(__dirname + '/' + UPLOAD_DIR));

// Handle POST request to receive zip archive file
app.post(ENDPOINT, upload.single('file'), (req, res) => {


  const apiValue = req.body.API;

      if (apiValue === APIKey) {

        // Get the path of the uploaded file
      const filePath = req.file.path;

      // Extract the contents of the zip archive file to a destination directory
      const zip = new AdmZip(filePath);
      zip.extractAllTo(UPLOAD_DIR, true);

      // Send response to client
      res.send('File uploaded and extracted successfully');

  } else {
    res.send('API parameter mismatch');
  }


});

app.get('/',
        (req, res) => {

  // Send response to client
  res.send(`Listen client at endpoint ${ENDPOINT} and port ${PORT}`);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
