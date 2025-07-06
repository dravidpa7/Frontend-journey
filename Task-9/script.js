function on(){
    document.querySelector(".char").style.animationPlayState = 'paused';
    document.querySelector(".spinner").style.animationPlayState = 'paused';  
    document.querySelector('.start-btn').style.display='block';
    document.querySelector('.pause-btn').style.display='none';  

    for(let i=0;i<10;i++){
        console.log(i);
        document.getElementById("count").innerHTML=i;
    }
}

function off(){
    document.querySelector(".char").style.animationPlayState = 'running';
    document.querySelector(".spinner").style.animationPlayState = 'running'; 
    document.querySelector('.start-btn').style.display='none'; 
    document.querySelector('.pause-btn').style.display='block';      
}
