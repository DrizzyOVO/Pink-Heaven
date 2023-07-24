const parallax_el = document.querySelectorAll(".parallax"); 

let xValue=0; 
let yValue=0;  

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - (window.innerWidth/2); 
    yValue = e.clientY - (window.innerHeight/2);  

    // console.log(xValue, yValue);
    
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;  
        let speedy = el.dataset.speedy; 
        el.style.transform = `translate(calc(-50% + ${xValue * speedx}px), calc(-50% + ${yValue * speedy}px))`;  
    })

})

const parallax_ele = document.querySelectorAll(".elements"); 

let xValuex=0; 
let yValuey=0;  

window.addEventListener("mousemove", (e) => {
    xValuex = e.clientX - (window.innerWidth/2); 
    yValuey = e.clientY - (window.innerHeight/2);  

    // console.log(xValuex, yValuey);
    
    parallax_ele.forEach((el) => {
        let speedx = el.dataset.speedx;  
        let speedy = el.dataset.speedy; 
        el.style.transform = `translate(calc(${xValuex * speedx}px), calc(${yValuey * speedy}px))`;  
    })

})

