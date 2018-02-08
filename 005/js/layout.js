    document.querySelector('.footer__btn')
        .addEventListener('click',function(e){
               var parent = document.querySelector('.layout');

               if(e.target.parentNode.parentNode.parentNode.classList.contains('challenge')){
                    console.log(e.target.parentNode.parentNode.parentNode.className);
                    parent.classList.remove('challenge');

                    //remove height for main content
                    var mainHeight = document.styleSheets[0].cssRules[10];
                    mainHeight.style.removeProperty('height');
                    console.log(document.styleSheets[0].cssRules[10]);

                    //display text
                    var txt = document.querySelector('.main__fill');
                    txt.style.display = 'block';
               }else{
                    console.log(e.target.parentNode.parentNode.parentNode.className);
                    parent.classList.add('challenge');

                    //set height for main content
                    var mainHeight = document.styleSheets[0].cssRules[10];
                    mainHeight.style.setProperty('height','300px');
                    console.log(document.styleSheets[0].cssRules[10]);

                    //hide text
                    var txt = document.querySelector('.main__fill');
                    txt.style.display = 'none';

               }

        });