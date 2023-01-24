//Theme is League of Legends
//make a function that will make the html/css appear visible after the win condition is met aka (Player 1 Wins!)
//make a function that will make the html/css appear visible affter the win condition is met aka (Player 2 Wins!)
//make a function that will make the html/css appear after there are no possible positions for the pieces to be put aka (Draw!) 
//make a function that will make the css appear after the Draw textbox is shown, stating (Play Again?)
//make a function that will reset the game after pressing yes to Play Again? or pressing the reset button
//create a reset button that resets the game
//make a way that will have a textbox that states whose turn it is aka (Player 1's Turn)
//make a way that will have a textbox that states whose turn it is aka (Player 2's Turn)
//make a win condition for Player 1
//make a win condition for Player 2
//make a draw condition if there are no more applicable pieces
//make it so you cant place pieces after game is finished
//when clicking on board, make the first player visible

let counter = 0
let playerOne
let PlayerTwo
const winCondition = [
//verticle
[1, 2, 3, 4],
[2, 3, 4, 5],
[3, 4, 5, 6],
[4, 5, 6, 7],
[8, 9, 10, 11],
[9, 10, 11, 12],
[10, 11, 12, 13],
[11, 12, 13, 14],
[15, 16, 17, 18],
[16, 17, 18, 19],
[17, 18, 19, 20],
[18, 19, 20, 21],
[22, 23, 24, 25],
[23, 24, 25, 26],
[24, 25, 26, 27],
[25, 26, 27, 28],
[29, 30, 31, 32],
[30, 31, 32, 33],
[31, 32, 33, 34],
[32, 33, 34, 35],
[36, 37, 38, 39],
[37, 38, 39, 40],
[38, 39, 40, 41],
[39, 40, 41, 42],
//horizontal
[1, 8, 15, 22],
[8, 15, 22, 29],
[15, 22, 29, 36],
[2, 9, 16, 23],
[9, 16, 23, 30],
[16, 23, 30, 37],
[3, 10, 17, 24],
[10, 17, 24, 31],
[17, 24, 31, 38],
[4, 11, 18, 25],
[11, 18, 25, 32],
[18, 25, 32, 39],
[5, 12, 19, 26],
[12, 19, 26, 33],
[19, 26, 33, 40],
[6, 13, 20, 27],
[13, 20, 27, 34],
[20, 27, 34, 41],
[7, 14, 21, 28],
[14, 21, 28, 35],
[21, 28, 35, 42],
//bot left to top right diagnol
[15, 23, 31, 39],
[8, 16, 24, 32],
[16, 24, 32, 40],
[1, 9, 17, 25],
[9, 17, 25, 33],
[17, 25, 33, 41],
[2, 10, 18, 26],
[10, 18, 26, 34],
[18, 26, 34, 42],
[3, 11, 19, 27],
[11, 19, 27, 35],
[4, 12, 20, 28],
//top left bot right diagnol
[22, 16, 10, 4],
[29, 23, 17, 11],
[23, 17, 11, 5],
[36, 30, 24, 18],
[30, 24, 18, 12],
[24, 18, 12, 6],
[37, 31, 25, 19],
[31, 25, 19, 13],
[25, 19, 13, 7],
[38, 32, 26, 20],
[32, 26, 20, 14],
[39, 33, 27, 21]
]