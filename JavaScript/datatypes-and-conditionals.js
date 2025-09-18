/* 1- Write an if condition to check that age is between 14 and 90 inclusively. */
if (age>=14 && age<=90){}

/* 2- Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it. */
if (!(age>=14 && age<=90)){}
if (age<=14 || age>90){}

/*3- Which of these alerts are going to execute?
What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */

console.log("first ")// theresault inside the if would be -1
//second wouldn't be printed the resault inside the if would be 0
console.log("third")// the resault inside the if would be 1

/* Will alert be shown?

if ("0") {
  alert( 'Hello' );
} */

console.log("Yes")

/* Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!” */

let officialName = prompt('What is the “official” name of JavaScript?','');
if (officialName == "ECMAScript"){
    console.log("“Right!");
}   else{
    console.log("You don’t know? ECMAScript!");
}

/* Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

  let resault = (a+b<4) ? 'Below' : "Over";

  /* Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

let message;

message = (login=='Employee') ? 'Hello'
: (login=='Director') ? 'Greetings'
: (login=='') ? 'No login' : '';

/* Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */

    if (browser === 'Edge'){
    alert( "You've got the Edge!" );
}   else if( browser === 'Chrome' 
        ||browser === 'Firefox' 
        ||browser === 'Safari' 
        ||browser === 'Opera'){
    alert( 'Okay we support these browsers too' );
}else{
    alert( 'We hope that this page looks ok!' );
}

/* Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */
let a = +prompt('a?', '');

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break; // not required but to make the code future proof
}