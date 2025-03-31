const accountId = 112358;
let accountEmail = "john@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; //not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/* What is scope?
 Scope is the current context of execution. Ex. In a function, the scope is the function. In a file, the scope is the file. In a block statement, the scope is that block. {}
 */

console.table([
	accountId,
	accountEmail,
	accountPassword,
	accountCity,
	accountState,
]);
