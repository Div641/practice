var btn = document.querySelector("button");
var box = document.querySelector(".box");
var h1 = document.querySelector("h1");
var main = document.querySelector(".main");

var arr=[
    {
        team:"RCB",
        primary:"red",
        secondary:"green"
    },
    {
        team:"CSK",
        primary:"yellow",
        secondary:"blue"
    },

    {
        team:"MI",
        primary:"blue",
        secondary:"silver"
    },

    {
        team:"PBSK",
        primary:"crimson",
        secondary:"silver"
    },

    {
        team:"SRH",
        primary:"orange",
        secondary:"black"
    },

    {
        team:"KKR",
        primary:"purple",
        secondary:"yellow"
    },

    {
        team:"RR",
        primary:"pink",
        secondary:"blue"
    },

    {
        team:"GT",
        primary:"dark blue",
        secondary:"gold"
    },

    {
        team:"LSG",
        primary:"light blue",
        secondary:"orange"
    },
    
    {
        team:"DC",
        primary:"blue",
        secondary:"red"
    }
]

btn.addEventListener("click", function() {
    var winner=arr[ Math.floor(Math.random()*arr.length) ];
    h1.innerText=winner.team;
    main.style.backgroundColor=winner.primary;
    box.style.backgroundColor=winner.secondary;
});