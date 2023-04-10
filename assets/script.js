function seeProjects(){
    document.getElementById('viewProjects').style.display ="block";
    document.getElementById('body').style.overflow= "hidden";
    document.getElementById('body').style.paddingRight= "1rem";
}

function closeMP(){
    document.getElementById('viewProjects').style.display ="none";
    document.getElementById('body').style.overflow= "auto";
    document.getElementById('body').style.paddingRight= "0rem";
}