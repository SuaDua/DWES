const promise = new Promise(function(resolve, reject) {
    resolve('Success!');
     // or
     // reject ("Error!");
     });
    
     promise.then(function(any) {
     console.log(any); // Success!
     }, function(any) {
     console.log(any); // Error!
     });