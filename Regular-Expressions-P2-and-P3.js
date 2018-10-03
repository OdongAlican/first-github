
// METACHARACTER SYMBOLS    CHARACTER SETS AND QUANTITIES


//MetaCharacter, patterns, sysmbols we can use

// we create a custom function that will console log and say whatever the regular expression contains whatever we put in or the regular expression does not contain whatever we put in 


/* let re;

//Literal characters
re = /hello/;

//string to match
const str = 'Hello world';

//Log result
const result = re.exec(str);
console.log(result); // this returns null


function test1(re,str){

    if(re.test(str)){ // the result of test is true or false.. so if its true return the first console log.. but if not then return the console log after else
        console.log(`${re.source} matches ${str}`); // but they input string is upper case H hence they are not the same as the literals
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${re.source} does not match ${str}`); // this re turns hello does not match Hello world
    }
}

test1(re,str); */








// with the i flag

/* let re;

//Literal characters
re = /hello/i;

//string to match 
const str = 'Hello world';

//Log result
const result = re.exec(str);
console.log(result); // this returns ["Hello", index: 0, input: "Hello world", groups: undefined]


function test1(re,str){

    if(re.test(str)){ // the result of test is true or false.. so if its true return the first console log.. but if not then return the console log after else
        console.log(`${re.source} matches ${str}`); // this returns hello matches Hello world
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${re.source} does not match ${str}`); // this re turns nothing 
    }
}

test1(re,str); */



//Metacharacter symbols 

let re;

//Literal characters

/*  re = /^h/i; // Must start with

//string to match 
const str = 'Hello world';


function test1(re,str){

    if(re.test(str)){ // the first letter of the string literral must start with h. the case does not matter
        console.log(`${str} matches ${re.source}`); // this returns Hello world matches ^h
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this re turns nothing 
    }
}

test1(re,str); */
 



/* re = /^h/; // Must start with

//string to match 
const str = 'Hello world';


function test1(re,str){

    if(re.test(str)){ // it must start with small letter h in the string literal. we do not have the i flag
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Hello world does not match ^h
    }
}

test1(re,str); */


/* re = /^h/; // Must start with

//string to match 
const str = 'Alican Hello world'; // the string input does not start with h

const reh = re.exec(str);
console.log(reh); // this returns null


function test1(re,str){

    if(re.test(str)){ // 
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Alican Hello world does not match ^h
    }
}

test1(re,str);  */



/* re = /^h/; // Must start with

//string to match 
const str = 'hAlican Hello world'; // putting h as the first letter

const reh = re.exec(str);
console.log(reh); // this returns ["h", index: 0, input: "hAlican Hello world", groups: undefined]


function test1(re,str){

    if(re.test(str)){ // because the string literal strats with h
        console.log(`${str} matches ${re.source}`); // this returns hAlican Hello world matches ^h
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
 */


/* re = /world$/; // Must End with

//string to match 
const str = 'Alican Hello world'; // ["world", index: 13, input: "Alican Hello world", groups: undefined]

const reh = re.exec(str);
console.log(reh); // this returns ["h", index: 0, input: "hAlican Hello world", groups: undefined]


function test1(re,str){

    if(re.test(str)){ // because the string literal ends with world$
        console.log(`${str} matches ${re.source}`); // this returns Alican Hello world matches world$
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
 */


/* // you could just put the last few letters in any case
re = /ORLD$/i; // Must End with

//string to match 
const str = 'Alican Hello world'; // ["orld", index: 14, input: "Alican Hello world", groups: undefined]

const reh = re.exec(str);
console.log(reh); // this returns ["h", index: 0, input: "hAlican Hello world", groups: undefined]


function test1(re,str){

    if(re.test(str)){ // because the string literal ends with world$
        console.log(`${str} matches ${re.source}`); // this returns Alican Hello world matches ORLD$
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

test1(re,str);  */

/* 
re = /fworld$/i; // Must End with

//string to match 
const str = 'Alican Hello world'; // 

const reh = re.exec(str);
console.log(reh); // this returns null


function test1(re,str){

    if(re.test(str)){ // because the string literal ends with fworld instead of world
        console.log(`${str} matches ${re.source}`); // this returns nothing 
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Alican Hello world does not match fworld$
    }
}

test1(re,str);  */



/* 
re = /^hello$/i; // Must Start and End with Hello.. hello mus be the only input string in both upper and lower cases

//string to match 
const str = 'Alican Hello world'; // 

const reh = re.exec(str);
console.log(reh); // this returns null


function test1(re,str){

    if(re.test(str)){ // because the string literal ends with fworld instead of world
        console.log(`${str} matches ${re.source}`); // this returns nothing 
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Alican Hello world does not match ^hello$
    }
}

test1(re,str);  */



/* re = /^hello$/i; // Must Start and End with Hello.

//string to match 
const str = 'Hello'; // 

const reh = re.exec(str);
console.log(reh); // this returns ["Hello", index: 0, input: "Hello", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Hello matches ^hello$
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

test1(re,str);  */


/* // dot in the literal
re = /h.llo$/; //  when we put a dot(.) in the literal anything in the input string including symbol,numers and letters will pass

//string to match 
const str = 'H*llo'; // 

const reh = re.exec(str);
console.log(reh); // this returns ["Hyllo", index: 0, input: "Hyllo", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Hyllo matches ^h.llo$
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
 */


/* // dot in the literal
re = /h.llo/i; // 

//string to match 
const str = 'H*ello'; // the dot must only be replace with only one character.. this will not match

const reh = re.exec(str);
console.log(reh); // this returns ["Hyllo", index: 0, input: "Hyllo", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns H*ello does not match ^h.llo$
    }
}



test1(re,str);  */



// * in the literal
/* re = /h*llo/i; //  matches with any character 0 or more

//string to match 
const str = 'H*ello'; // 

const reh = re.exec(str);
console.log(reh); // this returns ["llo", index: 3, input: "H*ello", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns H*ello matches h*llo
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}


test1(re,str);  */


/* re = /h*llo/i; //  matches with any character 0 or more

//string to match 
const str = 'Hllo'; // you could actually remove a charater completely and it still matches

const reh = re.exec(str);
console.log(reh); // this returns ["Hllo", index: 0, input: "Hllo", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Hllo matches h*llo
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}


test1(re,str);  */



//optional character 


/* re = /gra?e?y/i; //  an optional character

//string to match 
const str = 'Grey'; 

const reh = re.exec(str);
console.log(reh); // this returns ["Grey", index: 0, input: "Grey", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Grey matches gra?e?y
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */



/* re = /gra?e?y/i; //  an optional character

//string to match 
 const str = 'Gray'; 

const reh = re.exec(str);
console.log(reh); // this returns ["Gray", index: 0, input: "Gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Gray matches gra?e?y
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);   */


/* re = /gra?e?y/i; // optional characters

const str = 'Griy'; 

const reh = re.exec(str);
console.log(reh); // this returns null


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Griy does not match gra?e?y
    }
}
test1(re,str);  */


/* re = /gra?e?y/i; // optional characters

const str = 'Gry'; // we could just leave both a and e beacuse the are both optional and it will still match b

const reh = re.exec(str);
console.log(reh); // this returns ["Gry", index: 0, input: "Gry", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Gry matches gra?e?y
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */



// if we need a question mark ?

/* re = /gra?e?y\?/i; // optional characters.. this will not consider y as optional because of the back slash

const str = 'Gray?'; // include a question mark

const reh = re.exec(str);
console.log(reh); // this returns ["Gray?", index: 0, input: "Gray?", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Gray? matches gra?e?y\?
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */


/* 
re = /gra?e?y\?/i; // optional characters.. this will not consider y as optional because of the back slash

const str = 'Gray'; // without a question mark

const reh = re.exec(str);
console.log(reh); // this returns null because the ? is now a literal


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Gray does not match gra?e?y\?
    }
}
test1(re,str);  */




/* re = /gr[ae]y/i; // optional characters must only be a and e

const str = 'Gray'; 

const reh = re.exec(str);
console.log(reh); // this returns ["Gray", index: 0, input: "Gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Gray matches gr[ae]y
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */




/* re = /gr[ae]y/i; // optional characters must only be a and e

const str = 'Grey'; 

const reh = re.exec(str);
console.log(reh); // this returns ["Grey", index: 0, input: "Grey", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Grey matches gr[ae]y
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */


/* re = /gr[ae]y/i; // optional characters must only be a and e

const str = 'Gry'; // removing a letter from input string

const reh = re.exec(str);
console.log(reh); // this returns  null


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Gry does not match gr[ae]y
    }
}
test1(re,str); 
 */


/* re = /[GF]ray/; // optional characters must only G or F

const str = 'Gray'; 

const reh = re.exec(str);
console.log(reh); // this returns ["Gray", index: 0, input: "Gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Gray matches [GF]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */



/* re = /[^GF]ray/; // this does NOT means it begins with G or F.. it means anything apart from G and F. ^[GF] means it begins with either G or F

const str = 'Xray'; 

const reh = re.exec(str);
console.log(reh); // this returns ["Xray", index: 0, input: "Xray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Xray matches [^GF]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */



/* re = /[^GF]ray/; // this does NOT means it begins with G or F.. it means anything apart from G and F. ^[GF] means it begins with either G or F

const str = 'gray'; // there is a lower case g and there is no i flag.. 

const reh = re.exec(str);
console.log(reh); // this returns ["gray", index: 0, input: "gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns gray matches [^GF]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str); */ 






/* re = /[^GF]ray/; // this does NOT means it begins with G or F.. it means anything apart from G and F. ^[GF] means it begins with either G or F

const str = 'Gray';  

const reh = re.exec(str);
console.log(reh); // this returns null


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns Gray does not match [^GF]ray
    }
}
test1(re,str);  */



/* //uppercases

re = /[A-Z]ray/; // this requires only uppercase letters

const str = 'Gray';  

const reh = re.exec(str);
console.log(reh); // this returns ["Gray", index: 0, input: "Gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Gray matches [A-Z]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */



/* //lower casses

re = /[a-z]ray/; // this requires only lowercase letters

const str = 'gray';  

const reh = re.exec(str);
console.log(reh); // this returns ["gray", index: 0, input: "gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns gray matches [a-z]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */




/* //Any case

re = /[A-Za-z]ray/; // this requires any letter

const str = 'gray';  

const reh = re.exec(str);
console.log(reh); // this returns ["gray", index: 0, input: "gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns gray matches [A-Za-z]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str); 
 */





/* //Any case

re = /[A-Za-z]ray/; // this requires any letter

const str = 'Gray';  

const reh = re.exec(str);
console.log(reh); // this returns ["Gray", index: 0, input: "Gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns Gray matches [A-Za-z]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str); 
 */



/* //Any Number

re = /[0-9]ray/; // this requires any number

const str = '4ray';  

const reh = re.exec(str);
console.log(reh); // this returns ["4ray", index: 0, input: "4ray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns 4ray matches [0-9]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str); 
 */


/* 
//Any Number

re = /[0-3]ray/; // the range of numebrs can be altered in any way

const str = '4ray';  

const reh = re.exec(str);
console.log(reh); // this returns null


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns nothing
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns 4ray does not match [0-3]ray
    }
}
test1(re,str); 
 */





/* re = /[0-9]ray/; // the range of numebrs can be altered in any way

const str = '10ray';   // this will also match but it starts looking from zero

const reh = re.exec(str);
console.log(reh); // this returns ["0ray", index: 1, input: "10ray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns 10ray matches [0-9]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */





/* 
re = /[0-9][0-9]ray/; // the range of numebrs can be altered in any way

const str = '10ray';   // this will now consider both zero and 1

const reh = re.exec(str);
console.log(reh); // this returns ["10ray", index: 0, input: "10ray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns 10ray matches [0-9][0-9]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */









 
//Any Number or letter
/* 
re = /[A-Za-z0-9]ray/; // the range of numebrs can be altered in any way

const str = '4ray';  

const reh = re.exec(str);
console.log(reh); // this returns ["4ray", index: 0, input: "4ray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns 4ray matches [A-Za-z0-9]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str); 
 */


// Any number or letter 


/* re = /[A-Za-z0-9]ray/; // any number, any letter or case

const str = 'gray';  

const reh = re.exec(str);
console.log(reh); // this returns ["gray", index: 0, input: "gray", groups: undefined]


function test1(re,str){

    if(re.test(str)){ 
        console.log(`${str} matches ${re.source}`); // this returns gray matches [A-Za-z0-9]ray
        
    } else{                                      // source is simply to remove the forward slashes.
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}
test1(re,str);  */



/* // BRACES {} -  QUANTIFIERS    number of occurence

re = /hel{2}o/i; // we put the letter that appears more than once in {} and the number of occurence in the bracket

const str = 'Hello';
const result = re.exec(str);

console.log(result); // this returns ["Hello", index: 0, input: "Hello", groups: undefined]


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns Hello matches hel{2}o
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

occurence(str,re);
 */


/* 
//number of occurence

re = /hel{2}o/i; // we put the letter that appears more than once in {} and the number of occurence in the bracket

const str = 'Helllo';  // there are three ls in the input string
const result = re.exec(str);

console.log(result); // this returns null


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns Helllo does not match hel{2}o
    }
}

occurence(str,re); */





/* //number of occurence

re = /hel{2,4}o/i; // we put the range of numbers 

const str = 'Helllo';  // there are three ls in the input string
const result = re.exec(str);

console.log(result); // this returns ["Helllo", index: 0, input: "Helllo", groups: undefined]


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns Helllo matches hel{2,4}o
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

occurence(str,re); */





/* //number of occurence

re = /hel{2,4}o/i; // we put the range of letters 

const str = 'Helllllo';  // there are five ls in the input string
const result = re.exec(str);

console.log(result); // this returns null


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns Helllllo does not match hel{2,4}o
    }
}

occurence(str,re); */




/* //number of occurence

re = /hel{2,4}o/i; // we put the range of letters 

const str = 'Helo';  // there one l in the input string
const result = re.exec(str);

console.log(result); // this returns null


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns Helo does not match hel{2,4}o
    }
}

occurence(str,re);
 */





/* 
//number of occurence

re = /hel{2,}o/i; // we put a coma after the least number of occurence. {2,} this means it should occur atleast {2} times

const str = 'Hellllllllllllo';  // 
const result = re.exec(str);

console.log(result); // this returns ["Hellllllllllllo", index: 0, input: "Hellllllllllllo", groups: undefined]


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns Hellllllllllllo matches hel{2,}o
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

occurence(str,re); */




/* // Parentheses() - Grouping

re = /([0-9]x){3}/; // a number is multiplied by x and its repeated atleast three times

const str = '2x5x';  // 
const result = re.exec(str);

console.log(result); // this returns null


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns nothing
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns 2x5x does not match ([0-9]x){3}
    }
}

occurence(str,re);
 */




/* // Parentheses() - Grouping

re = /([0-9]x){3}/; // a number is multiplied by x and its repeated atleast three times

const str = '2x5x3x4x5x6x7x';  // multiplied by x atleast 3 times
const result = re.exec(str);

console.log(result); // this returns (2) ["2x5x3x", "3x", index: 0, input: "2x5x3x4x5x6x7x", groups: undefined]


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns 2x5x3x4x5x6x7x matches ([0-9]x){3}
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

occurence(str,re); */




// Parentheses() - Grouping

re = /^([0-9]x){3}$/; // a number is multiplied by x and its repeated exactly three times

const str = '2x5x3x';  // multiplied by x atleast 3 times
const result = re.exec(str);

console.log(result); // this returns (2) ["2x5x3x", "3x", index: 0, input: "2x5x3x", groups: undefined]


function occurence(str,re){

    if(re.test(str)){
        console.log(`${str} matches ${re.source}`); // this returns 2x5x3x matches ^([0-9]x){3}$
    }else{
        console.log(`${str} does not match ${re.source}`); // this returns nothing
    }
}

occurence(str,re);