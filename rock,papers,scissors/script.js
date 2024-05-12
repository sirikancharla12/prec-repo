const paper = document.getElementById("paperbtn");
const scissor = document.getElementById("scissorbtn");
const rock = document.getElementById("rockbtn");
const compchoice = [paper, scissor, rock];
const score = document.getElementById("count");
setupEventListeners();



function gamestart() {
    const outerDiv = document.createElement("div");
    outerDiv.id="outer";
    outerDiv.style.width="35vw";
    outerDiv.style.padding="2px";
    
    outerDiv.style.height="15vh";
    outerDiv.style.marginTop="20px";
    outerDiv.style.color="white";

    const your = document.createElement("div");
    const house = document.createElement("div");
    your.textContent = "Your pick";
    your.textContent = "Your pick";

    house.textContent = "The House pick";
    outerDiv.style.display = "flex";
    outerDiv.style.justifyContent = "space-between";
    outerDiv.style.alignItems = "center";
    outerDiv.style.fontSize="2rem"
    
   
    var mainbody = document.querySelector(".maincont");
    mainbody.style.width="35vw";
    mainbody.style.height="22.5vh";
    mainbody.id="mainbody"
    userip = document.createElement("div");
    comp = document.createElement("div");
    mainbody.style.display = "flex";
    mainbody.style.justifyContent = "space-between";
    mainbody.style.alignItems = "center";
    
    userip.id = "userchoice";
    userip.style.width = "20vh";
    userip.style.height = "20vh";
    userip.style.borderRadius = "50px";

   comp.id="comp"
    comp.style.height = "20vh";
    comp.style.width = "20vh";
    comp.style.borderRadius = "50px";

    

    outerDiv.appendChild(your);
    outerDiv.appendChild(house);

    mainbody.appendChild(userip);
    mainbody.appendChild(comp);
    mainbody.parentNode.insertBefore(outerDiv, mainbody);
}
function compgame(){
    const choiceIndex = Math.floor(Math.random() * compchoice.length);
        const choiceButton = compchoice[choiceIndex].cloneNode(true);
        comp.innerHTML = ""; 
        comp.appendChild(choiceButton);
        scissor.style.display = "none";
        rock.style.display = "none";
        paper.style.display="none";
        document.getElementById("tri").style.display="none";
        result();
}
function result(){
    var mainbody = document.getElementById("mainbody");

    var  comp= document.getElementById("comp");

    var result=document.createElement("div");
    result.id="resultofgame";
    result.style.fontSize="1.5rem"
    result.style.padding="3px"
    result.style.borderRadius="10px"
    result.style.border="5px solid rgb(92, 92, 189)";


    // result.textContent="result"
    mainbody.insertBefore(result,comp);
    mainbody.style.justifyContent="space-between"; 
    mainbody.style.alignItems="center"; 
    
    winner();
play();
}
function winner(){
    var userChoice = document.getElementById("userchoice").firstElementChild.id;
    var compChoice = comp.firstElementChild.id;
    // console.log("User Choice:", userChoice);
    // console.log("Computer Choice:", compChoice);


    if(userChoice===compChoice){
        document.getElementById("resultofgame").innerText="DRAW"
    }
    else if (userChoice === "paperbtn" && compChoice === "scissorbtn") {
        document.getElementById("resultofgame").innerText = "HOUSE WON";
      
    } 
    else if (userChoice === "paperbtn" && compChoice === "rockbtn") {
        document.getElementById("resultofgame").innerText = "YOU WIN";
        userScore = 1;
        score.textContent = userScore;
    } 
    else if (userChoice === "scissorbtn" && compChoice === "paperbtn") {
        document.getElementById("resultofgame").innerText = "YOU WIN";
        userScore = 1;
        score.textContent = userScore;
    }
     else if (userChoice === "scissorbtn" && compChoice === "rockbtn") {
        document.getElementById("resultofgame").innerText = "HOUSE WON";
    } 
    else if (userChoice === "rockbtn" && compChoice === "scissorbtn") {
        document.getElementById("resultofgame").innerText = "YOU WIN";
        userScore = 1;
        score.textContent = userScore;
    } 
    else if (userChoice === "rockbtn" && compChoice === "paperbtn") {
        document.getElementById("resultofgame").innerText = "HOUSE WON";
    }



}
function play() {
    const playop = document.createElement("div");
    playop.style.display="flex";
    playop.justifyContent="center";
    playop.alignItems="center";

    const rulesElement = document.getElementsByClassName("rules")[0];

    if (rulesElement) {
        rulesElement.parentNode.insertBefore(playop, rulesElement);
    }
    playop.innerText = "PLAY AGAIN";
    playop.style.padding="3px"
    playop.style.width="max-content"
    playop.style.borderRadius="10px"
    playop.style.border="5px solid rgb(92, 92, 189)";
    playop.addEventListener("click", function () {
        console.log("PLAY button clicked");
        location.reload();
         
        // reset();
        // userScore = 0;
        // score.textContent = userScore;
    })
}



function setupEventListeners() {
    paper.addEventListener("click", function () {
        gamestart();
        userip.appendChild(paper.cloneNode(true));
      compgame();
      
    });
    

scissor.addEventListener("click", function () {
   
    gamestart();
    userip.appendChild(scissor.cloneNode(true));
   compgame();
   
});

rock.addEventListener("click", function () {  

    gamestart();
    userip.appendChild(rock.cloneNode(true));
compgame();
});
}


    // function reset() {
    //     window.onload;
    
        // document.querySelectorAll('.paper, .scissor, .rock').forEach(element => {
        //     element.style.display = 'block';
        // });
        // document.getElementById('tri').style.display = 'block';
        // document.getElementById('outer').remove();
    
        // setupEventListeners();
        // userScore = 0;
        // score.textContent = userScore;
    // }


// Create a new XMLHttpRequest object
// var xhr = new XMLHttpRequest();

// // Configure the request
// xhr.open('GET', 'path/to/your/part1.html', true);

// // Set up a callback function to handle the response
// xhr.onload = function() {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         // Success! Inject the response HTML into a specific element on the page
//         document.getElementById('targetElementId').innerHTML = xhr.responseText;
//     } else {
//         // Request failed, handle errors here
//         console.error('Request failed with status:', xhr.status);
//     }
// };

// Send the request
// xhr.send();













 