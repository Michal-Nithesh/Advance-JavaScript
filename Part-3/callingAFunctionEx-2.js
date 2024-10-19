function outer (){
    let counter = 0;
    function incrementCounter () {
        counter ++;
    }
    return incrementCounter();
}
// outer();

const myNewFunction = outer();
myNewFunction();
myNewFunction();