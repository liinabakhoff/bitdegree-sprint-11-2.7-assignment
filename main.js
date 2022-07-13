"use strict";

// set interval for 2 seconds
const hydrateFn = setInterval(function(){
    document.write('Hello');
}, 2000);

// set timeout to clear the interval after 60 seconds
const stopFn = setTimeout(function(){
    clearInterval(hydrateFn);
}, 60000);