function on(){
    document.querySelector(".char").style.animationPlayState = 'running';
    document.querySelector('button:last-child').style.backgroundColor='rgb(255, 73, 73)';
    document.querySelector(".spinner").style.animationPlayState = 'running';    
}

function off(){
    document.querySelector(".char").style.animationPlayState = 'paused';
    document.querySelector('button:last-child').style.backgroundColor='rgb(201, 8, 8)';
    document.querySelector(".spinner").style.animationPlayState = 'paused';    

}
