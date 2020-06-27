//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const parser = require('exif-parser');

//joining path of directory 
const directoryPath = path.join(__dirname, 'movies');
const JSONfile = 'mmdb.json';
const JSONFilePath = path.join(__dirname, JSONfile);
//passsing directoryPath and callback function

//Create collection object
let movieCollection = [];

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach

    let promises = files.map((file) => {
        return new Promise(function(file, resolve, reject){
            const filePath = path.join(directoryPath, file);
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    return console.log('Error reading file: ' + err);
                }
                else {
                    const movieItem = createFileObject(file, data);
                    movieCollection.push(movieItem);
                    resolve();
                }
            });
        }.bind(this, file));
    });

    Promise.all(promises).then((results) => {
        //Put your callback logic here
        createJSON(movieCollection);
    });
});

function createFileObject(file, metadata){
    const buffer = parser.create(metadata);
    const result = buffer.parse();
    const splitFile = file.split(' (');
    // Do whatever you want to do with the file
    return {
        path : file,
        name : splitFile[0],
        year : Number(splitFile[1].substr(0,4)),
        rating : result.tags.Rating * 2
    }
}

function createJSON(data){
    fs.writeFile(JSONFilePath, JSON.stringify(data, null, 4), (err) => {
        if (err) throw err;
        console.log('\n JSON Ready ==> \n');
    });
}