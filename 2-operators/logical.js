// console.log('logical')

let highIncome = true;
let goodCreditScore = true;

//Logical AND (&&)
// returns TRUE if both operands are TRUE
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// logical OR (||)
// returns TRUE if one of the operands is TRUE
highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

// logical NOT (!)

highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);
let applicaionRefused = !eligibleForLoan;
console.log(applicaionRefused);




/// part - 2 

 
// Falsy (false)
// --> undefined
// --> null
// --> 0
// --> false
// --> ''
// --> Nan 

// Anything that is not Falsy - is Truthy


// short-circuiting
// false || 1 || 2
// ans -> 1
