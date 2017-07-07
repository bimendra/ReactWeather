// function getTempCallabck(location, callback) {
//     callback(undefined, 78);
//     callback('Not a valid url')
// }

// getTempCallabck('Philadelphia', function(err, temp) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// })

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if(a && b && typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Error')
        }
    })
}

addPromise(3, 4)
    .then(function(value) {
        console.log('Total: ' + value)
    }, function(err) {
        console.log(err);
    })