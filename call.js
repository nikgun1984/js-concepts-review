/*
   Call function is used as borrowing and as a matter of fact function
   is better to be outside an object and call some function to add it to
   that object
*/

let personName = {
    firstName: 'Nick',
    lastName: 'Gundobin'
}

let printFullName = function(hometown, state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+", "+state);
}

/*
 Necessary to call reference as a first argument and then the rest arguments
 make sure number of arguments matches
*/
printFullName.call(personName, "Tampa", 'Florida');

// Difference between call and apply, all arguments go into array
printFullName.apply(personName, ["Tampa", 'Florida']);

// Bind method is great because we can call it later. The difference between
// above functions, bind method will return and can be called later in the code
const myName = printFullName.call(personName, "Tampa", 'Florida');
myName();