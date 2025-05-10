"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let rotation = 180;
    let rotatebtn = document.getElementById("rotate-btn")
    let morebtn = document.getElementById("more-button")
    rotatebtn.addEventListener("click", () => {
        morebtn.style.transform = `rotate(${rotation}deg)`;
        rotation = rotation === 180 ? 0 : 180;
    });
    let patch = document.getElementById("patch")
    patch.addEventListener("click", ()=>{
        setTimeout(()=>{
            patch.style.height = patch.style.height === "150px" ? "50px" : "150px";
        },500)
    });
});