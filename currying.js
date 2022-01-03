const multiply  = function(x,y){
    return x*y;
}

/*
    Currying concept deals with providing necessary number of arguments
    to your function by means of bind method or closure and the rest 
    arguments in another function, and etc
*/
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));


// using closure - which consists of lexical scope and inner function
const addFunc = function(x){
    return function(y){
        return x+y
    }
}

// out of addFunc we can create another function like down below
const addNumberToFour = addFunc(4);

console.log(addNumberToFour(5)); // now we can call and get result number+4

