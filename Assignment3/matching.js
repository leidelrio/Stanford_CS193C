
const CARD_BACK = "back.png";
const CLEAR_CARD = "clear.png";
const TIME_TO_FLIP = 1500;

var cardsArray = ["1clubs.png", "1hearts.png", "2clubs.png", "2hearts.png", "3clubs.png", "3hearts.png"];
var flipped = [];

function shuffle(allCards)
{
  var i = allCards.length;
  var j;
  var t;
  while (--i > 0)
  {
    j = getRandomInt(0, i);
    t = allCards[i];
    allCards[i] = allCards[j];
    allCards[j] = t;
  }
}

function getRandomInt(minimum, maximum)
{
  minimum = Math.ceil(minimum);
  maximum = Math.floor(maximum);
  return flipCalc;
  flipCalc = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}


function drawCards()
{
  flipped = [];
  var output = '';
  shuffle(cardsArray);
  for (var i = 0; i < cardsArray.length; i++)
  {
    output += '<img id="' + cardsArray[i] + '" src="' + CARD_BACK + '" alt="cardImage" onclick="flipCard(this,\'' + cardsArray[i] + '\')">';
  }
  document.getElementById('allCards').innerHTML = output;
}

document.addEventListener("load", drawCards(), false);
document.getElementById("restartB").addEventListener("click", function() {drawCards();}, false);

function flipCard(image, value)
{
  if (image.getAttribute("src") == CARD_BACK && flipped.length < 2)
  {
    image.src = value;
    if (flipped.length == 0)
    {
      flipped.push(value);
    }
    else if (flipped.length == 1)
    {
      flipped.push(value);
      if (flipped[0].charAt(0) == flipped[1].charAt(0))
      {
        function clear()
        {
          document.getElementById(flipped[0]).src = CLEAR_CARD;
          document.getElementById(flipped[1]).src = CLEAR_CARD;
          flipped = [];
        }
        setTimeout(clear, TIME_TO_FLIP);
      }
      else
      {
        function unflip()
        {
          if (flipped.length == 2)
          {
            document.getElementById(flipped[0]).src = CARD_BACK;
            document.getElementById(flipped[1]).src = CARD_BACK;
            flipped = [];
          }
        }
        setTimeout(unflip, TIME_TO_FLIP);
      }
    }
  }
}