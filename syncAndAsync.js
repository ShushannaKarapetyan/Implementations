// Asynchronous vs synchronous
console.log(1);
setTimeout(function () {
    console.log(2)
}, 2000);

console.log(3);


function whenYouFinishYourWork(callback) {
    setTimeout(function () {
        callback()
    }, 5000);
}

whenYouFinishYourWork(function () {
    console.log("Go home!");
})

console.log("Watch TV!");


// Example
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script)
    document.head.append(script);
}

loadScript('/stack.js', function () {
    console.log('Do something.');
})