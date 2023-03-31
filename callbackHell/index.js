const fs = require('fs');

fs.readFileA('./accounts/account1.txt', function (error1, data1) {
    if (error1) {
        return;
    }

    console.log(data1.toString());

    fs.readFile('./accounts/account2.txt', function (error2, data2) {
        if (error2) {
            return;
        }

        console.log(parseInt(data1.toString()) + parseInt(data2.toString()));

        // ... hell
    });
});


function readAccount() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./accounts/account1.txt', function (err, data) {
            if (err) {
                return reject(err);
            }

            resolve(data.toString());
        });
    })
}

readAccount()
    .then(function (result) {
        console.log(result.toString());
    })
    .catch(function (err) {
        console.log(err);
    })


fs.readFile('./accounts/account2.txt')
    .then(function (result) {
        console.log('Result: ' + result.toString());
    })
    .catch(function (error)  {
        console.log('Error: ' + error);
    });
