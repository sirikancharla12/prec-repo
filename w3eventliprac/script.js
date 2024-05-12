// <!-- W3 RESOURCE EVENT LISTENERS EXERCISE 1 -->

// const btn=document.createElement("button");
// btn.textContent="Click me";

// btn.addEventListener("click",()=>{
//     console.log("hey siri u r doing great")
//     document.body.innerHTML="button clicked! check ur console.."
// });
// document.body.appendChild(btn);
// <!-- W3 RESOURCE EVENT LISTENERS EXERCISE 1 -->
// function changeColor(elementId,color){
//     const element=document.getElementById(elementId);
//     if(element){
//         element.addEventListener('mouseenter',()=>{
//             element.style.backgroundColor=color;
//         })
        
//     }
//     element.addEventListener('mouseleave',()=>{
//         element.style.backgroundColor="";
//     })

// }
// changeColor('box','pink');
// <!-- W3 RESOURCE EVENT LISTENERS EXERCISE 1 -->
const images=["https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000","https://wowslider.com/sliders/demo-47/data1/images/nightsky523892.jpg","https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-09.jpg?scale.width=2000","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7KBXxpibej0fcUOcLtfv4-2fLHD3FxASrW0e_5xnbbk5RguPw1XJgaPnxUX2cMiRLXo&usqp=CAU"];
let currentind=0;
 

const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const image = document.getElementById('image');

 previousBtn.addEventListener("click",()=>{
    currentind=(currentind-1+images.length)%images.length;
    
    image.classList.add("fade");
    setTimeout(() => {
        image.src = images[currentind];
        image.classList.remove("fade");
    }, 500);
})
nextBtn.addEventListener("click",()=>{
    currentind=(currentind+1)%images.length;
    
    image.classList.add("fade");
    setTimeout(() => {
        image.src = images[currentind];
        image.classList.remove("fade");
    }, 500);
})



 
