var main = document.querySelector('.main');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';

    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

    div.style.top= Math.floor(Math.random() * 100) + '%';
    div.style.left= Math.floor(Math.random() * 100) + '%';
    div.style.rotate = Math.floor(Math.random() * 360) + 'deg';
    div.style.scale = Math.random() + 0.8;
    div.style.transform = 'translate(-50%, -50%)';

    div.style.position = 'absolute';
    div.style.overflow = 'hidden';
    div.style.border = '2px solid white';
    div.style.borderRadius = '5px';
    

    main.appendChild(div);
});