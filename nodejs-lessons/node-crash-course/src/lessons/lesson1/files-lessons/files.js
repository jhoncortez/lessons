const fs = require('fs');

// read files
fs.readFile('./docs/blog1.txt',  'utf8',  (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data);
})

// write files
fs.writeFile('./docs/blog1.txt', 'hello again', (err) => {
    if (err) throw err;
    console.log('File written');
}) ;

// create directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) throw err;
        console.log('Directory created');
    }) ;
} else {
    fs.rmdir('./assets', (err) => {
        if (err) throw err;
        console.log('Directory deleted');
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', err => {
      if (err) {
        console.log(err);
      }
      console.log('file deleted');
    });
  }
