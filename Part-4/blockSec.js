function printHello() {
    function blockFro1Sec() {
        // Blocks in the JavaScript thread for 1 sec
    }
}

setTimeout(printHello, 0);

blockFro1Sec()
console.log("Me first");