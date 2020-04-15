var fs = require('fs');
module.exports = function (dirPath) {
  fs.readFile(dirPath, {}, function (err, file) {
    file.forEach(function (fileName) {
      fs.readFile(`${dirPath}/${fileName}`, function (err, data) {
        console.log(data);
      })
    })
  });
}
