var yellowSquare = $('#yellow-id');
var blueSquare = $('#blue-id');

var yellowScore = 0;
var blueScore = 0;

var yellowHighScore = $('#yellowHighScore');
var blueHighScore = $('#blueHighScore');

localStorage.yellow;
localStorage.blue;

//I created logic to make the game work -> then I found a way to make it dry and more efficient.
// yellowSquare.click(function(){
//   yellowScore++
//   yellowSquare.empty();
//   yellowSquare.append("<h2>" + yellowScore + "</h2>");
// });
//
// blueSquare.click(function(){
//   blueScore++
//   blueSquare.empty();
//   blueSquare.append("<h2>" + blueScore + "</h2>");
// });

//OR create an object that can make the above code dryer

yellowSquare.click({param1: yellowScore, param2: yellowSquare}, increaseScore);
blueSquare.click({param1: blueScore, param2: blueSquare}, increaseScore);

if (localStorage.yellow === undefined) {
  localStorage.yellow = 0;
}
if (localStorage.blue === undefined) {
  localStorage.blue = 0;
}

function increaseScore (event) {
 event.data.param1 += 1;
 if (event.data.param2 === yellowSquare && event.data.param1 > localStorage.yellow){
  localStorage.yellow = event.data.param1;
 } else if (event.data.param2 === blueSquare && event.data.param1 > localStorage.blue){
  localStorage.blue = event.data.param1;
 }
 yellowHighScore.text(localStorage.yellow);
 blueHighScore.text(localStorage.blue);
 event.data.param2.empty();
 event.data.param2.append("<h2>" + event.data.param1 + "</h2>")
}

yellowHighScore.text(localStorage.yellow);
blueHighScore.text(localStorage.blue);

$('button').on('click', function(){
  location.reload()
  localStorage.yellow = 0;
  localStorage.blue = 0;
});
