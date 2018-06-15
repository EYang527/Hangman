
// Function generate random letter
var possibleLetter="abcdefghijklmnopqrstuvwxyz";

var wordToGuess;
var yourInput="";
var possibleWords=["zebra","difficult","queen","trump","dock","giant","cucumber","one","amazing","hot",
];

// initialization of values 
var guess=7;
var losses=0;
var wins=0;
var guessSoFar="";
var drawing="";
var arrayDrawing=[];
var newHidding=[];
var counter=0;



resetInit();

//=======================================================================

// Event Listening

    document.addEventListener('keypress', (event) => {
    var keyName = event.key;
    var returnCheck=checkWord(keyName,wordToGuess);
    
  
    if (((returnCheck.length)>0) && (counter<arrayDrawing.length))  // return char contains in words with all position
    {
        console.log(returnCheck);
        for (var index in returnCheck)
        {
            arrayDrawing[returnCheck[index]]=keyName;
            counter++;
            console.log(counter);
            console.log("AR : "+arrayDrawing.length);

        }
         if(counter>=arrayDrawing.length){
                console.log("return : "+returnCheck);
              
                document.getElementById("wordToGuess").innerHTML="Words to Guess :  "+"  "+drawing;
                console.log("victory");
                //document.getElementById("image").src="./assets/images/yes.jpg"; //change picture for winning
               // alert("victory"); 
                wins++; 
                document.getElementById("wins").innerHTML="Wins :  "+wins;
                resetInit();  
                return 0;   
         }
        
        console.log(arrayDrawing);
        drawing=printString(arrayDrawing);
        document.getElementById("wordToGuess").innerHTML="Words to Guess :  "+"  "+drawing;

        
    }
    else        //not char found in string log "char" on guess.
    {   
        
        guess--;
        if (guess<=0){
                        alert("youlose!!!");
                        losingGame();
                    }
        
                    document.getElementById("guessLeft").innerHTML="Guesses left: "+guess;
        guessSoFar+=keyName;
        document.getElementById("yourGuess").innerHTML="Letter(s) used  :  "+"  "+guessSoFar;
        guessSoFar+=","

        
    }
    return 0;
  
    });


function pickRandom()
{   
    var result= possibleWords[Math.floor(Math.random()*possibleWords.length)];    
    return result;
}

function checkWord(letter,word)
{       
    var indices = [];
    for(var i=0; i<word.length;i++)
     {
    if (word[i] ===letter) 
     {
        indices.push(i); 
     }       
    }
    return indices;
}

function printString(arrayWord){

    var printWord=" ";
    for (var c in arrayWord)
    {
        printWord+=arrayWord[c]+" ";
    }

    return printWord;
}
function formatArrayHidding(array){
    for (var index in array)
    {
        array[index]="_";
    }
    return array;
}

function resetInit(){

    guess=7;
    guessSoFar="";
    counter=0; // reset counter
    wordToGuess=pickRandom();
    alert("word to guess is : "+wordToGuess);


arrayDrawing=wordToGuess.split("");
console.log("string to array: "+arrayDrawing);
newHidding=formatArrayHidding(arrayDrawing);
console.log("string to array hiding: "+arrayDrawing);
document.getElementById("guessLeft").innerHTML="Guesses left: "+guess;
document.getElementById("yourGuess").innerHTML="Letter(s) used  :  "+"  "+guessSoFar;

drawing=printString(newHidding);

document.getElementById("wordToGuess").innerHTML="Words to Guess :  "+"  "+drawing;

}

function losingGame(){
    console.log("you lose");
    losses++;
    console.log("you lost");
    document.getElementById("losses").innerHTML="Losses: "+losses;
    guessSoFar="";
    guess=7;
    resetInit();
}

