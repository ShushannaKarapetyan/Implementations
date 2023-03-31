Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]).then((result) => {
    console.log(result);
});

const fs = require('fs');

function promisify(action) {
    return function (fileName) {
        return new Promise((resolve, reject) => {
            action(fileName, (err, data) => {
                if (err) {
                    return reject(err);
                }

                resolve(data);
            })
        })
    }
}

const readFileAsync = promisify(fs.readFile);

readFileAsync('test.txt')
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.log(err)
    })