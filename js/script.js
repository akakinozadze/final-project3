let ulelement = document.getElementById("ul1");
let burgerelement = document.getElementById("burger1");

burgerelement.addEventListener("click", function () {
    ulelement.classList.toggle("newUl");
});


let searchelement = document.getElementById("searchForm");
let search1element = document.getElementById ("searchSearch");

search1element.addEventListener("click", function(){
    searchelement.classList.toggle("newsearch");
});

