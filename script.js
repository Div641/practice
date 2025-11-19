var inc = document.querySelector("#inc");
var dec = document.querySelector("#dec");
var count = 0;
var h2 = document.querySelector("h2");

inc.addEventListener("click", function() {
    count++;
    h2.innerText = count;
});
dec.addEventListener("click", function() {
    count--;
    h2.innerText = count;
});