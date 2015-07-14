//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. 
//Give it a key of name with the value being your name, 
//and another key of age with the value being your age. 
//Then alert your name using dot notation.

  var me = {
    name: "Adriana",
    age: "25",
  }
alert(me.name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. 
//Have the values to those keys be your favorite thing in that category.

//After you've made your object, add another key named 'car' with the value being your favorite car and 
//then another key named 'brand' with the value being your favorite brand.

var favoriteThings = {
  band:"Franco",
  food: "Chinese",
  Person:"Husband",
  book:"JavaScript",
  movie:"WarHorse",
  holiday:"Xmass",

}



//favoriteThings.car="AudiA6";
//favoriteThings.brand="Victoria";
favoriteThings["car"]="AudiA6";
favoriteThings["brand"] = "Victoria";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your 
//favoriteThings object to be '50 Shades of Gray'.

  //Code here

favoriteThings["food"] = "Lettuce";
favoriteThings["book"] = "50 Shades of Gray";


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack ={};
  var item = "firstPocket";
  backPack[item]= "chapstick";
backPack.color= "blue";
//After you do the above, alert your entire backPack object.

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

 console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. 
//Fill those properties in with the appropriate values.

 var me ={
  name:"ME",
  age:"1",
  height:"5'7",
  gender:"none",
  married: "Yes",
  eyeColor:"not blue",
  hairColor:"Not Gray",

 };

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  for(var key in me){
console.log(me[key]); 
};

/* ALSO WORKS with alert
  for(var key in me){
alert(me[key]); 
};
*/

//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, 
//with the values being the length of each song.

  var album = {
    beauDay: "3.5",
    sweetLove:"2.5",
    takMeChurch: "3.3",
    otherLoveSong: "3.2",
    breakUpSong: "2.3",
  };

//Now, loop through your album object alerting every song title individually.

   for(var key in album){
alert(key); 
};




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population 
//(doesn't have to be accurate).

var states = {
  Utah:"2",
  California:"4",
  Texas:"3",
  NewYork:"5",
  Florida:"3.5"
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

   for(var key in states){
if (states[key] > 3){
  alert(key);
} 
};



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */
for (var i in user){
   if (user[i]) {
   console.log("Truthy");
   }
   else{
    delete user[i];
   }
}
//Once you get your truthy Object, Change the remaining values in the object to be specific to you 
//(name: 'your name', username: 'your username'), rather than my information.
user["name"]="Adriana";
user["username"] ="wera";
user["pwHash"]="password";

 




//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  user["name"]="Tyler S. McGinnis";
  user.email="tyler.mcginnis@devmounta.in";


//Now call the sayName method that's on the user object which will alert the users email

/*user.sayName;
function user.sayName()
*/
user.sayName();
//this worked!! hurray!!

//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {
  };


/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection["alertHello"] = function(){
    alert("hello");
  };
  methodCollection["logHello"] = function(){
    console.log("hello");
  };

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
//undefined (it worked!!)
methodCollection.logHello();
//VM3193:6 hello
//undefined



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns
// a new object with all of the information that you passed in.
function MakePerson(name, age, ssn){
    var newObj = {
      name: name,
      age: age,
      ssn: ssn
    };
      
        return (newObj);  
  }

var person = MakePerson("adrina", 25, 87765);
  /*
MakePerson("adrina", 25, 87765);
Object {name: "adrina", age: 25, ssn: 87765}
var person = MakePerson("adrina", 25, 87765);
undefined
person
Object {name: "adrina", age: 25, ssn: 87765}
  */


//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and 
//returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

 function MakeCard(cardNum, Name, expDate) {
    var cardObj = {
      carNum: cardNum,
      name: Name,
      expDate: expDate
    }
      return(cardObj);
 }
  
  
  var personCard = MakeCard(863274657, "adrina", 7765);
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either
 a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter
    and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all 
   the properties from the person as well as the creditcard.
*/

//use for loop.

 function bindCard (personInf, cardObj){

      //use for loop
    for(var key in personInf){
      cardObj[key]= personInf[key];

      }
    
    return(cardObj);
  }


  var perObj=bindCard(person, personCard);






/*  NEXTPROBLEM:

 function(){
 ver getFirst = fuction() {
  
 }
var dosomething = function(getFirstFunc, array){
  
}

var people =[];
doSomething(getFirst, people)



anotehr example

var add = function(x, y){
  return x + y;
}
var myAge = 30;
var yourAge = 999;

add(myAge, YourAge);



ANother example

var add = function(x, y){
  return x + y;

var subtract = function(x, y){
  return x - y;

var myObj ={
  
}

var input = '+' //  will be + or -
function doMath(userInput, addFunc, substractFunc, leftValue, rightValue){
  if(userInput === '+'){
    addFunc(leftValue, rightValue);
  }
  else if (userInout === '-'){
  substractFunc(leftValue, rightValue)
  }
}

doMath(input, add, subtract, 7, 99); //invoking the




