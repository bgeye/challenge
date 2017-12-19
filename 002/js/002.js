
setCloseBtn();

function setCloseBtn(){
    var btn = document.getElementsByClassName('nav-btn');
    btn[0].addEventListener('click',movebtn);

}

function movebtn(){
    console.log('clicked');
    var lines = document.querySelectorAll('.nav-btn__linetop, .nav-btn__linecenter, .nav-btn__linebottom');
    var linemax = lines.length -1;
    //console.log(lines[0].className += ' move');
    //console.log(lines.length);
    for(var i = 0;i < lines.length;i++){
        lines[i].className += ' move';
    }
    //lines[linemax].addEventListener('transitionend',crossLines);
    setTimeout(function(){
        crossLines();
    },500);

    var btn = document.getElementsByClassName('nav-btn');
    btn[0].removeEventListener('click',movebtn);
}

function crossLines(){
    var lines = document.querySelectorAll('.nav-btn__linetop, .nav-btn__linebottom');
    var lastline = lines.length-1;
    console.log('lines to add openclass: '+ lines.length);
    console.log(lines);
    for(var i = 0; i < lines.length;i++){

        lines[i].className += ' rotate';
    }

    if(lines[lastline]){
        console.log('lastLine: '+lines[lastline]);
        lines[lastline].addEventListener('transitionend',setOpenClass);

    }

}

function setOpenClass(){
    console.log('transition ends here.');
    var btn = document.getElementsByClassName('nav-btn');
    btn[0].className += ' open';
    var openbtn = document.getElementsByClassName('open');
    openbtn[0].addEventListener('click',removeClass);
    console.log('eventlistener set');

}

function removeClass(){
    console.log('removeClass');

    var lines = document.getElementsByClassName('rotate');
    while(lines.length){
        lines[0].classList.remove('rotate');
    }
    var lines = document.getElementsByClassName('move');
    while(lines.length){
        lines[0].classList.remove('move');
    }

    var openbtn = document.getElementsByClassName('open');
    openbtn[0].removeEventListener('click',removeClass);
    setCloseBtn();
}
