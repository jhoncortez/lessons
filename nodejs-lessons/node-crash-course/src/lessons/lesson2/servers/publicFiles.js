const path = require('path');
//const fs = require('fs');

const loadPublicFilesUrl = (fileName) => path.join(__dirname, '/public/', fileName);

module.exports = loadPublicFilesUrl;
