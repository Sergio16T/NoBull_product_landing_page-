let blackHeather_div = document.getElementById('black-heather'); 
let blackHeatherDD_div = document.getElementById('Black-Heather-DD'); 
let heatherForest_div =document.getElementById('white-heather-forest'); 
let heatherForestDD_div = document.getElementById('White-Heather-DD')
let dropDownContent_div = document.querySelector('dropdown-content')



/* idea 1 create an array to store all of the href links 
const dropDown = [blackHeather_div, heatherForest_div]; 
instead create a node list with querySelectorAll
*/
const dropDown = document.querySelectorAll('.shoeimage');

blackHeatherDD_div.addEventListener("click", function (e) {
    dropDown.forEach(shoeimage => shoeimage.classList.remove('shadow'));
    blackHeather_div.classList.add('shadow');
    blackHeather_div.scrollIntoViewIfNeeded();
});
// dropDown.forEach(x => x.classList.remove('shadow')); 
// can be written as x for html element

heatherForestDD_div.addEventListener("click", function (e) {
    dropDown.forEach(shoeimage=> shoeimage.classList.remove('shadow'));
    heatherForest_div.classList.add('shadow'); 
    heatherForest_div.scrollIntoViewIfNeeded();
});



