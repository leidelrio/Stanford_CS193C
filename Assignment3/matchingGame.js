
        const CARD_BACK="back.png";
        const CLEAR_CARD = "clear.png";
        const TIME_TO_FLIP = 1500;

        var cardsArray=["1clubs.png", "1hearts.png", "2clubs.png", "2hearts.png", "3clubs.png", "3hearts.png"];
        var flipped=[];

        function getRandomInt(min,max) //Mozilla
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random()*(max-min+1))+min;
        }

        function shuffle(allCards)
        {
            var i=cards.length;
            var j;
            var t;
            while (--i>0)
            {
                j=getRandomInt(0,i);
                t = cards[i];
                cards[i]=cards[j];
                cards[j]=t;
            }
        }

        function drawCards()
        {
            flipped=[];
            var output ='';
            shuffle(cardsArray);
            for(var i=0; i<cardsArray.length;i++)
            {
                output+='<img id="'+cardsArray[i]+'"src="'+CARD_BACK+'"alt="cardPic" onclick="flip(this,\''+cardsArray[i]+'\')">';
            }
            document.getElementById('cards'),innerHTML=output;
        }

        document.addEventListener("load", drawCards(), false);
        document.getElementById("restartB").addEventListener("click", function() {drawCards();}, false);

        function flipCards(image,value)
        {
            if(image.getAttribute("src")==CARD_BACK && flipped.length<2)
            {
                image.src=value;
                if(flipped.length==0)
                {
                    flipped.push(value);
                }
                else if (flipped.length==1)
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
                        setTimeout(clear,TIME_TO_FLIP);
                    }
                    else
                    {
                        function flipBack()
                        {
                            if(flipped.length == 2)
                            {
                                document.getElementById(flippedCards[0]).src = CARD_BACK;
                                document.getElementById(flippedCards[1]).src = CARD_BACK;
                                flipped=[];
                            }
                        }
                        setTimeout(flipBack,TIME_TO_FLIP);
                    }
                }
       }
 }
