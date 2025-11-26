// 
var grow=0
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('.inner');

btn.addEventListener('click', function() {
    btn.style.pointerEvents= 'none';

    var num = Math.floor(Math.random() *100); // to generate random number
    console.log(num);

    var int = setInterval(() => {
        grow++;
        h2.innerHTML=grow +'%';
        inner.style.width=grow +'%';
    },num);    //hoga 100 percent hi download bs speed change hotirahegi har alag baar

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML='Downloaded';
        btn.style.opacity='0.6';
    },num*100);

    console.log('Downloaded in '+ num/10 +'seconds ' );
});

