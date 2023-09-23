let card = document.querySelectorAll("#card");
let cards = Array.from(card);
let moves = 15;
let movetxt = document.querySelector(".moves");
let newgamebtn = document.querySelector(".newgame");
var card1, card2, card1img, card2img;
var aqw = 5;
var images = [
    { image: "castle.jpg", left: 2, },
    { image: "yellowflower.jpg", left: 2, },
    { image: "Koala.jpg", left: 2, },
    { image: "Penguins.jpg", left: 2, },
    { image: "Desert.jpg", left: 2, },
    { image: "jellyfish.jpg", left: 2, },
    { image: "redflower.jpg", left: 2, },
    { image: "whiteflower.jpg", left: 2, },
];

// var 
var non = false;
var none = 1;

function assignImages() {
    
    cards.forEach((e) => {
        none = 1;
        while (none == 1) {
            if (e.children[1].classList.contains("set")) {
                none = 0;
            } else {
                while (!(e.children[1].classList.contains("set"))) {
    
                    a = Math.round(Math.random() * (0 - 7) + 7)
    
                    if (images[a].left > 0) {
                        if (e.children[1].classList.contains("bg")) {
                            e.children[1].setAttribute("src", images[a].image);
                            e.children[1].classList.remove("bg");
                            e.children[1].classList.add("set");
                            images[a].left -= 1;
                            none = 0;
                        }
                    }
                }
            }
    
        }
    
    })
    moves = 15;
    movetxt.innerHTML = `Number of moves Left: 15`;

}
assignImages();
 function checkLose() {
    if (!(cards.every((e)=> e.style.visibility == "hidden")) && moves<=0) {
        alert("You Lose! Click okay to replay");
        location.reload();
    }
}
 function checkWin() {
    if ((cards.every((e)=> e.style.visibility == "hidden")) && moves>=0) {
        alert("You Win... Click Okay to replay.");
        location.reload();
    }
}




var count = 0;
cards.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.children[0].getAttribute("style") == "transform: rotateY(-180deg);") {
            console.log("wrogn turn")
        } else {
            
            e.children[0].setAttribute("style", "transform: rotateY(-180deg);");
            e.children[1].setAttribute("style", "transform: rotateY(0deg);");
            setTimeout(() => {
                
                if (count==1) {
                    card2 = e;
                    if (card1.children[1].getAttribute("src") == card2.children[1].getAttribute("src")) {
                        card1.style.visibility = "hidden";
                        card1.style.zIndex = "-9";
                        card2.style.visibility = "hidden";
                        card2.style.zIndex = "-9";
                        card1=0; 
                        card2=0;
                        count=-1;
                    }else{
                        card1.children[0].setAttribute("style", "")
                        card1.children[1].setAttribute("style", "")
                        card2.children[0].setAttribute("style", "")
                        card2.children[1].setAttribute("style", "")
                        count =-1;
                        card1 = 0;
                        card2 =0;
                    }
                    moves-=1;
                    movetxt.innerHTML = `Number of moves Left: ${moves}`;
                    
                }
                card1 = e;
                count++;
                checkWin();
                checkLose();
            }, 1000);
        }
      
    })
   
})

newgamebtn.addEventListener('click',()=>{
  location.reload();
})