function display(data) { console.log(data) }
function printHello() { console.log("Hello"); }
function blockFro366Sec(){}

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display)

blockFro366Sec()
console.log("Me first")