class CustomPromise {
    constructor(exec) {
        this.status = 'pending';
        this.thenArray = [];
        this.catchArray = [];
        this.value;

        const resolve = (value) => {
            this.status = 'fulfilled';
            this.value = value;

            this.thenArray.forEach(cb => cb(this.value));
        };

        const reject = error => {
            this.status = 'rejected';
            this.value = error;

            this.catchArray.forEach(cb => cb(this.value));
        }

        setImmediate(() => exec(resolve, reject));
    }

    then(callback) {
        if (this.status === 'fulfilled') {
            callback(this.value);
        } else if (this.status === 'pending') {
            this.thenArray.push(callback);
        }

        return this;
    }

    catch(callback) {
        if (this.status === 'rejected') {
            callback(this.value)
        } else if (this.status === 'pending') {
            this.catchArray.push(callback);
        }

        return this;
    }
}

function customPromise() {
    return new CustomPromise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    })
}

const p = customPromise();

p.then(value => {
    console.log('number', value);
});

console.log(1)

p.then(value => {
    console.log('number', value)
});


// .catch(err => {
//     console.log(err);
// })

console.log(2)