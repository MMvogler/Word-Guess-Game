
    // An array of words to generate 
    var words = ["gum", "chocolate", "taffy"];

    // Pick a word randomly
    var wordNumber = Math.floor(Math.random() * words.length);
    
    var wordPicked = words[wordNumber];

    var rightWord = [];
    var wrongWord = [];

        
    // Generate underscores based on the length of words
    var underScore = [];
    console.log(wordPicked);

    var generateUnderscore = () => {
        for (var i =0; i < wordPicked.length; i++) {
            underScore.push("_");
        }
        return underScore;
    }

    console.log(generateUnderscore());


    // When user types this creates an event
    // document.onkeyup = function(event) {
    //     var userGuess = event.key;

    // }   
   
    document.addEventListener('keypress', (event) => {

    // converting the key event to a letter and auto formatting to lower case
        var keyword = String.fromCharCode(event.keyCode). 
            toLowerCase();
    
        // If the user chooses correct letter 
       if(wordPicked.indexOf(keyword) > -1) {
            rightWord.push(keyword);
            // Replace underscore with correct chosen letter.
            underScore[wordPicked.indexOf(keyword)] = keyword;
            console.log(rightWord);
            console.log(underScore);
       }
       // If the user chooses incorrect letter
        else { 
            (wrongWord.push(keyword));
            console.log(wrongWord);
       }
        
    })
   






    
       
        
    
  


    