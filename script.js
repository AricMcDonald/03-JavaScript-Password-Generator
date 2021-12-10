var generateBtn = document.querySelector("#generate");
var charsUp = ['A', 'B', 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L', 'N', 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
//"ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var charsLow = ['a', 'b', 'c' , 'd' , 'e' , 'f,' , 'g' , 'h' , 'i' , 'j' , 'k', 'l' , 'm' , 'o' , 'p' , 'q' , 'r' , 's' , "t" , 'u' , 'v', 'w' , 'x' , 'y' , 'z']
//"abcdefghiklmnopqrstuvwxyz";
var num = ['1', '2', '3' , '4' , '5' , '6', '7' , '8' , '9' , '0'] 
//"0123456789"
var symb = ['!', '@', '#', '$' , '%' , '^' , '&' , '*' , '(' , ')' , '-' , '+' , '_' , '=' , '[' , ']' , '{' , '}' , '|' , ':' , '"' , ';' , ',' , '<' , '.' , ">", '?'];
//"!@#$%^&*()_+,./;'[\]=-|~`";
var charset = []
var genPass = []


function generatePw (){
    var confirmLow = confirm("Would you like Lowercase letters in your Password?")
    if(confirmLow){
        for(var i=0; i < charsLow.length; i++) {
            charset.push(charsLow[i])
        }
        console.log(charset)
    }

    var confirmUp = confirm("Would you like Uppercase letters in your Password?")
    if(confirmUp){
        for( var i=0; i< charsUp.length; i++) {
            charset.push(charsUp[i])
        }
    console.log(charset)
    }
    var confirmNum = confirm("Would you like Numbers in your Password?")
    if(confirmNum){
        for(var i=0; i< num.length; i++) {
            charset.push(num[i])
        }
    console.log(charset)
    }
    var confirmsymb = confirm("Would you like Symbols in your Password?")
    if(confirmsymb){
        for(var i=0; i< symb.length; i++) {
            charset.push(symb[i])
        }
    console.log(charset)
    }
}

// Assignment Code
function randomizer(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomChar = arr[randomIndex];
    return randomChar;
}

// Write password to the #password input
function writePassword() {
    var password = generatePw();
    var person = prompt("how many charactors would you like to use 8-128");
    if(person < 8 || person > 128) {
        alert('Password must be longer than 8 characters and less than 128 characters')
    }

    for(i = 0; i<person; i++) {
        var characters = randomizer(charset);
        genPass.push(characters);
    }
    console.log(person)

  var passwordText = document.querySelector("#password");

  passwordText.value = genPass.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










