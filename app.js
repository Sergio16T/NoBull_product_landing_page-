let blackHeather_div = document.getElementById('black-heather'); 
let blackHeatherDD_div = document.getElementById('Black-Heather-DD'); 
let heatherForest_div =document.getElementById('white-heather-forest'); 
let heatherForestDD_div = document.getElementById('White-Heather-DD')
let dropDownContent_div = document.querySelector('dropdown-content')



/* idea 1 create an array to store all of the href links*/ 
const dropDown = [blackHeather_div, heatherForest_div]; 

blackHeatherDD_div.addEventListener("click", function (e) {
    dropDown.forEach(x => x.classList.remove('shadow'));
    blackHeather_div.classList.add('shadow');
    blackHeather_div.scrollIntoViewIfNeeded();
});

heatherForestDD_div.addEventListener("click", function (e) {
    dropDown.forEach(x => x.classList.remove('shadow'));
    heatherForest_div.classList.add('shadow'); 
    heatherForest_div.scrollIntoViewIfNeeded();
});

 // idea 2 stack overflow, 
/*
 window.onclick = function (e) {
    if (e.target.localName == 'a') {
        console.log('a tag clicked!');
    }
}
*/ 

