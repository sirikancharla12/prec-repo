function markAllAsRead() {
    var count = document.getElementById("number");
    var dots = document.querySelectorAll("#dot");
   
    count.textContent = "0";
    
    var notifications = document.querySelectorAll(".m1");
    notifications.forEach(notif => {
        notif.classList.add("read");
    });
    
    dots.forEach(dot => {
        dot.style.display = "none";
    });
    
}

function user(){
    var replies=document.getElementById("reply");
    replies.classList.toggle("hidden");
}

   
function clearany() {
    var mainContainer = document.querySelector(".maincont");
    
    mainContainer.innerHTML = " Oops! <br> No messages to display";
    mainContainer.style.display = "flex";
    mainContainer.style.flexDirection = "column";
    mainContainer.style.justifyContent = "center";    
    mainContainer.style.alignItems = "center";
    mainContainer.style.textAlign = "center";
    number.textContent="0";

    // mainContainer.style.textAlign="center";

}

    
    
    
