



setCloseBtn();

function setCloseBtn(){
    var btn = document.getElementsByClassName('nav-btn');
    btn[0].addEventListener('click',movebtn);

}

function movebtn(){

    var btn = document.getElementsByClassName('nav-btn');
    btn[0].removeEventListener('click',movebtn);
    var lines = document.querySelectorAll('.nav-btn__linetop, .nav-btn__linecenter, .nav-btn__linebottom');

    for(var i = 0;i < lines.length;i++){
        lines[i].className += ' move';
    }

    setTimeout(function(){
        crossLines();
    },500);


}

function crossLines(){
    var lines = document.querySelectorAll('.nav-btn__linetop, .nav-btn__linebottom');
    console.log('lines to add openclass: '+ lines.length);
    console.log(lines);
    for(var i = 0; i < lines.length;i++){
            console.log('in loop');

            if((i + 1)==(lines.length)){
                console.log('lastline');
                var lastline = lines[i];
                lines[i].addEventListener('transitionend',setOpenClass(lastline));
                lines[i].className += ' rotate';

            }else{
            console.log('first Line');
            lines[i].className += ' rotate';
            }

    }



}

function setOpenClass(line){
    var lines = line;
    console.log('lines in openclass: '+lines);
    lines.removeEventListener('transitionend',setOpenClass);
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

    setTimeout(function(){
        var lines = document.getElementsByClassName('move');
        while(lines.length){
            lines[0].classList.remove('move');
        }
    },500);



    var openbtn = document.getElementsByClassName('open');
    openbtn[0].removeEventListener('click',removeClass);
    openbtn[0].classList.remove('open');
    setCloseBtn();
}
