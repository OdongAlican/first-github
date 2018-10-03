// SHORT HAND CHARACTER CLASS

//Short hand characters
let re;

/* re = /\w/; //matches a word character alphanumeric(numbers or letters ) and underscore _ (only one character)

const str = '3x3x3x';
const result = re.exec(str);
console.log(result); // ["3", index: 0, input: "3x3x3x", groups: undefined] // note that only the first character is printed



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //3x3x3x matches \w
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

shortHand(re,str); */




/* re = /\w+/; //matches a word character alphanumeric(numbers or letters ) and underscore _ (+ or more than one character)

const str = '3x3x3x';
const result = re.exec(str);
console.log(result); //["3x3x3x", index: 0, input: "3x3x3x", groups: undefined]. note that all the values at the input string are printed out



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns 3x3x3x matches \w
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */




/* re = /\w+/; //matches a word character alphanumeric(numbers or letters ) and underscore _ (+ or more than one character)

const str = '!';
const result = re.exec(str);
console.log(result); //null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns ! does not match \w+
    }
}

shortHand(re,str); */





/* re = /\w+/; //matches a word character alphanumeric(numbers or letters ) and underscore _ (+ or more than one character)

const str = '()'; // parenthesis
const result = re.exec(str);
console.log(result); //null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns () does not match \w+
    }
}

shortHand(re,str);
 */



/*  re = /\w+/; //matches a word character alphanumeric(numbers or letters ) and underscore _ (+ or more than one character)

const str = ';'; // semi colon
const result = re.exec(str);
console.log(result); //null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns ; does not match \w+
    }
}

shortHand(re,str); */






/* re = /\w+/; //matches a word character alphanumeric(numbers or letters ) and underscore _ (+ or more than one character)

const str = ' '; // space input
const result = re.exec(str);
console.log(result); //null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns   does not match \w+
    }
}

shortHand(re,str); */




/* re = /\w+/; //matches a word character alphanumeric(numbers or letters ) and underscore _ (+ or more than one character)

const str = '_';
const result = re.exec(str);
console.log(result); //["_", index: 0, input: "_", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns _ matches with \w+
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */




//Non word characters  here we use uppercase W

/* re = /\W+/; // Non-word Characters.. so it will not match with alphanumerics and underscore _

const str = '_';
const result = re.exec(str);
console.log(result); //null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns _ does not match \w+
    }
}

shortHand(re,str); */





/* re = /\W+/; // Non-word Characters.. so it will not match with alphanumerics and underscore _

const str = '1';
const result = re.exec(str);
console.log(result); //null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns 1 does not match \w+
    }
}

shortHand(re,str); */




/* re = /\W+/; // Non-word Characters.. so it will not match with alphanumerics and underscore _

const str = 'w';
const result = re.exec(str);
console.log(result); //null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns w does not match \w+
    }
}

shortHand(re,str); */






/* re = /\W+/; // Non-word Characters.. so it will not match with alphanumerics and underscore _

const str = '!'; // exclamation
const result = re.exec(str);
console.log(result); //["!", index: 0, input: "!", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns ! matches \W+
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */



/* re = /\W+/; // Non-word Characters.. so it will not match with alphanumerics and underscore _

const str = ' '; // space
const result = re.exec(str);
console.log(result); //[" ", index: 0, input: " ", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns  matches \W+
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str);

// Anything else apart from the alphanumeric and underscore will match the non word character class */



/* re = /\d/; // it matches but this only prints the first digit


const str = '34585676'; // space
const result = re.exec(str);
console.log(result); //["3", index: 0, input: "34585676", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns  34585676 matches \d
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */




/* re = /\d+/; // matches and prints out all digit


const str = '34585676'; // space
const result = re.exec(str);
console.log(result); //["34585676", index: 0, input: "34585676", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns 34585676 matches \d+
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */

/* 
//non digit
re = /\D+/; // matches with only non digit values


const str = '34585676'; // 
const result = re.exec(str);
console.log(result); //this prints out null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns 34585676 does not match \D+
    }
}
 */


/* //non digit
re = /\D+/; // matches with only non digit values


const str = 'eeeeee'; // 
const result = re.exec(str);
console.log(result); //this prints ["eeeeee", index: 0, input: "eeeeee", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns eeeeee matches \D+
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */



/* //space
re = /\s/; // whitespace char


const str = ' '; // space 
const result = re.exec(str);
console.log(result); //this prints [" ", index: 0, input: " ", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns  matches \s
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */



/* //space
re = /\s/; // whitespace char


const str = 'erege'; // space 
const result = re.exec(str);
console.log(result); //this prints null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns  nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns erege does not match \s
    }
}

shortHand(re,str);
 */


/* 
//Non space
re = /\S/; // Non-whitespace char capital s


const str = 'erege'; // space 
const result = re.exec(str);
console.log(result); //this prints ["e", index: 0, input: "erege", groups: undefined]



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns  erege matches \S
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
 */



/* //Non space
re = /\S/; // Non-whitespace char capital s


const str = ' '; // space 
const result = re.exec(str);
console.log(result); //this prints null



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns   does not match \S
    }
}

shortHand(re,str); */





/* //word boundary
re = /Hell/; // 


const str = 'Hello, welcome to Hell '; // with two words havig hell ie hello and hell
const result = re.exec(str);
console.log(result); //this prints ["Hell", index: 0, input: "Hello, welcome to Hell ", groups: undefined].. the index i 0 because it looks at the word hello which also has hell.



function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns Hello, welcome to Hell  matches Hell
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str); */




/* //word boundary
re = /Hell\b/; // b is for the word boundary


const str = 'Hello, welcome to Hell '; // with two words havig hell ie hello and hell
const result = re.exec(str);
console.log(result); //this prints ["Hell", index: 18, input: "Hello, welcome to Hell ", groups: undefined].. the index is 18 because now it considers only the word Hell now.. 
                     // it doesnt find it at hello now beacause of the word boundary


function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns Hello, welcome to Hell  matches Hell\b
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str);
 */


/* // Assertions 

re = /X(?=y)/;   // match x only if followed by y

const str = 'xfgsjgjhbxh'; // here x is not followed by y
const result = re.exec(str);
console.log(result); //null

function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns xfgsjgjhbxh does not match X(?=y)
    }
}

shortHand(re,str); */




/* // Assertions 

re = /x(?=y)/;   // match x only if followed by y

const str = 'fgsjgjhbxyh'; // here x is followed by y
const result = re.exec(str);
console.log(result); //["x", index: 8, input: "fgsjgjhbxyh", groups: undefined]

function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns fgsjgjhbxyh matches x(?=y)
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothings
    }
}

shortHand(re,str);
 */

/* 
//not followed

re = /x(?!y)/;   // match x only if not followed by y

const str = 'fgsjgjhbxyh'; // here x is followed by y
const result = re.exec(str);
console.log(result); //null

function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns fgsjgjhbxyh does not match x(?!y)
    }
}

shortHand(re,str);
  */


//not followed

re = /x(?!y)/;   // match x only if not followed by y

const str = 'fgsjgjhbxh'; // here x is not followed by y
const result = re.exec(str);
console.log(result); // this prints out ["x", index: 8, input: "fgsjgjhbxh", groups: undefined]

function shortHand(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); //this returns fgsjgjhbxh matches x(?!y)
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

shortHand(re,str);















