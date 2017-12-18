
setCloseBtn();

function setCloseBtn(){
    var btn = document.getElementsByClassName('nav-btn');
    btn[0].addEventListener('click',movebtn);

}

function movebtn(){
    console.log('clicked');
    var lines = document.querySelectorAll('.nav-btn__linetop, .nav-btn__linecenter, .nav-btn__linebottom');
    //console.log(lines[0].className += ' move');
    //console.log(lines.length);
    for(var i = 0;i < lines.length;i++){
        lines[i].className += ' move';
    }

    setTimeout(function(){
        crossLines();
    },200);
}

function crossLines(){
    var lines = document.querySelectorAll('.nav-btn__linetop, .nav-btn__linebottom');
    for(var i = 0; i < lines.length;i++){
        lines[i].addEventListener('transitionend',setOpenClass);
        lines[i].className += ' rotate';
    }
}

function setOpenClass(){
    console.log('transition ends here.');
    var btn = document.getElementsByClassName('move');

   // var lines = document.getElementsByClassName('.rotate');
}
