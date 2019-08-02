const blackHeather_div = document.getElementById('black-heather'); 
const blackHeatherDD_div = document.getElementById('Black-Heather-DD'); 
const heatherForest_div =document.getElementById('white-heather-forest'); 
const heatherForestDD_div = document.getElementById('White-Heather-DD');
const cabernetHighTop_div = document.getElementById('cabernet-hightop');
const cabernetHighTopDD_div = document.getElementById('Cabernet-DD');
const springMoss_div = document.getElementById('spring-moss');
const springMossDD_div = document.getElementById('Spring-Moss-DD');
const woodStock_div = document.getElementById('woodstock'); 
const woodStockDD_div = document.getElementById('WoodStock-DD'); 


let dropDownContent_div = document.querySelector('dropdown-content')



/* idea 1 create an array to store all of the href links 
const dropDown = [blackHeather_div, heatherForest_div]; 
instead create a node list with querySelectorAll
*/
const dropDown = document.querySelectorAll('.shoeimage');

// dropDown.forEach(x => x.classList.remove('shadow')); 
// can be written as x for html element

// must be a better way to write below code can be written as 1 function with a this...
// I'm sure of it. using "this"
blackHeatherDD_div.addEventListener("click", function (e) {
    dropDown.forEach(shoeimage => shoeimage.classList.remove('shadow'));
    blackHeather_div.classList.add('shadow');
    blackHeather_div.scrollIntoViewIfNeeded();
});

heatherForestDD_div.addEventListener("click", function (e) {
    dropDown.forEach(shoeimage=> shoeimage.classList.remove('shadow'));
    heatherForest_div.classList.add('shadow'); 
    heatherForest_div.scrollIntoViewIfNeeded();
});
cabernetHighTopDD_div.addEventListener("click", function (e) {
    dropDown.forEach(shoeimage=> shoeimage.classList.remove('shadow'));
    cabernetHighTop_div.classList.add('shadow'); 
    cabernetHighTop_div.scrollIntoViewIfNeeded();
});
springMossDD_div.addEventListener("click", function (e) {
    dropDown.forEach(shoeimage=> shoeimage.classList.remove('shadow'));
    springMoss_div.classList.add('shadow'); 
    springMoss_div.scrollIntoViewIfNeeded();
});
springMossDD_div.addEventListener("click", function (e) {
    dropDown.forEach(shoeimage=> shoeimage.classList.remove('shadow'));
    springMoss_div.classList.add('shadow'); 
    springMoss_div.scrollIntoViewIfNeeded();
});




