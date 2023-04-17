const colorList = [
    "#F39C29","#ffcc29",
    "#E74C3C","#E83A4E","#B51B43",
    "#20C997",
    "#64D07B","#49C99D","#3FACA7",
    "#FAA46F","#3775A9",
    "#2CCCCE","#72A3FF","#2F8DFA","#4483E8",
    "#88B0F7",
    "#75C6D1","#7AC1D3",
    "#103E62","#4B6ABA","#511966"
]

const createHeart = () => {

    for (let index = 0; index < 3; index++) {
        let heart = document.createElement("i");
        heart.classList.add("fa-solid", "fa-heart");
        document.querySelector("#heart-value").appendChild(heart);
    }

}

const createBall = () => {

    let heart = document.querySelector("#heart-value").getAttribute("data-value");
 
    if(!document.querySelector(".ball")?.classList.contains("active")) {
        --heart;

        if(document.querySelector(".fa-heart-crack")) document.querySelector(".fa-heart-crack").remove();
        else{
           let allHeart = document.querySelectorAll(".fa-heart");
           if(allHeart.length !== 0) {
            let lastHeart = document.querySelector(".fa-heart:nth-child("+(allHeart.length)+')')
            lastHeart.classList.remove("fa-heart");
            lastHeart.classList.add("fa-heart-crack");
           }
        
        }

        document.querySelectorAll("fa-solid");
        document.querySelector("#heart-value").setAttribute("data-value",heart);

    }
   
    
        if(document.querySelector(".ball")) {
            document.querySelectorAll(".ball").forEach(item => {
                item.remove();
            })
        }

        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.backgroundColor = colorList[Math.floor(Math.random() * 10)];
        ball.style.top = Math.floor(Math.random() * 75) + 10 + "vh";
        ball.style.left = Math.floor(Math.random() * 75) + 10 +"vw";
        ball.addEventListener("click",()=>{

        ball.classList.add("active");

        let score = document.querySelector("#score-value").innerHTML;
        if(~~heart > 1) {
            ++score;
            document.querySelector("#score-value").innerHTML = score;
        }

        })
        document.querySelector(".ball-area").appendChild(ball);

        if (~~heart < 1){
            scoreboard(document.querySelector("#score-value").innerHTML);
        }

}

const scoreboard = (score) => {
    let scoreboardContainer = document.createElement("div");
    scoreboardContainer.classList.add("scoreboard-container");

    let scoreboardBody =  document.createElement("div");
    scoreboardBody.classList.add("scoreboard-body");
    scoreboardContainer.appendChild(scoreboardBody);

    let scoreInfo = document.createElement("div");
    scoreInfo.innerHTML = "Score : " + score;
    scoreboardBody.appendChild(scoreInfo);

    let button = document.createElement("button");
    button.innerHTML = "Try Again";
    button.addEventListener("click", () => {
        window.location.reload();
        return;
    })

    button.addEventListener("mouseenter", () => {
        scoreboardBody.classList.add("hovered");
    })

    button.addEventListener("mouseleave", () => {
        scoreboardBody.classList.remove("hovered");
    })

    scoreboardBody.appendChild(button);

    document.querySelector("body").appendChild(scoreboardContainer);

    clearInterval(refreshIntervalId);
    
}

createHeart();

var refreshIntervalId = setInterval(()=>{
    createBall();
}, 1000)


const findCursor = (e) => {
    let cursor = document.querySelector(".cursor-container");
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
}

document.querySelector("body").addEventListener("mousemove",(e)=>{findCursor(e)} );
