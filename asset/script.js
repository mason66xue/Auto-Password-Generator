//assign variables
const generateBtn = document.querySelector('#generate');
// const length =Number(prompt("Enter a number between 8 to 128 "));

// assign variables
const number=['0','1','2','3','4','5','6','7','8','9'];
const specialCharacter=['!','@','#','$','%','^','*'];
const upperCase=['A','B','C','D','E','F','G','H','I','J','K'];
const  lowerCase=['a','b','c','d','e','f','g','h','i','j','k'];


// promt to confirm the length of the password 
function generatePassword(){
const confirmLength = Number(prompt(('How many password would you like to have? Password should between 8 to 128')));
if(confirmLength >8 && confirmLength < 128){
    alert('please answer following questions')
}
else if(confirmLength < 8){
    alert('please enter between 8 to 128 characters')
}else(confirmLength >128)
{
    alert('please enter between 8 to 128 characters')
}


// prompt user to confirm speical characters in password. If choose cancel, then alert box pop
const confirmCharacter = confirm('Click OK if you want speical characters');
if(confirmCharacter===false){
    alert('you MUST incluse a special character');
}
// prompt user to confirm number in password. If choose cancel, then alert box pop
const confirmNumber= confirm('Click OK if you want numbers');
if(confirmNumber===false){
    alert('you MUST incluse a number');
}
// prompt user to confirm upper case in password. If choose cancel, then alert box pop
const confirmUpperCase= confirm('Click OK if you want upper case');
if(confirmUpperCase===false){
    alert('you MUST incluse a upper case');
}
// prompt user to confirm lower case in password. If choose cancel, then alert box pop
const confirmLowerCase= confirm('Click on OK if you want lower case');
if(confirmLowerCase===false){
    alert('you MUST incluse a lower case');
}




}

generatePassword();





generateBtn.addEventListener('click', generatePassword);