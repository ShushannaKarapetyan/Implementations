function promise1() {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(1);
        }, 1000)
    })
}

function promise2() {
    return new Promise((res, rej) => {
        setTimeout(function () {
            rej(2);
        }, 500)
    })
}

// Promise.race([
//     promise1(),
//     promise2(),
// ]).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })


// Implementation
function promiseRace(promises) {
    return new Promise((res, rej) => {
        let completed = false;

        promises.forEach(function (promise) {
            promise
                .then(function (data) {
                    if (!completed) {
                        completed = true;

                        res(data)
                    }
                })
                .catch(function (err) {
                    if (!completed) {
                        completed = true;

                        rej(err)
                    }
                })
        })
    })
}

promiseRace([
    promise1(),
    promise2(),
]).then(function (result) {
    console.log(result)
}).catch(function (err) {
    console.log('Error ' + err);
})
