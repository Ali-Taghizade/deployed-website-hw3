function toggleMenu() {
    var links = document.getElementById("links");
    var button_img = document.getElementById("sekil");
    var baglanma_x = document.getElementById("baglanma-x");
    if(links.style.display === "block") {
        links.style.display = "none";
        button_img.style.display = "block";
        baglanma_x.style.display = "none";
    }
    else{
        links.style.display = "block";
        button_img.style.display = "none";
        baglanma_x.style.display = "block";
    }
}

function getCurrentTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return hours + ':'  + minutes + ':' + seconds;
}

console.log('Saat: ' + getCurrentTime());

function updateTime() {
    var saat = document.getElementById('Date');
    saat.textContent = getCurrentTime();
    saat = document.getElementById('Date-mobile');
    saat.textContent = getCurrentTime();
}

setInterval(updateTime, 1000);

var slide = 0;

function carousel(){
    var slideArray = document.getElementsByClassName("slides");
    var yalanci = document.querySelector('.yalanci-slide');
    for(var i = 0; i < slideArray.length; i++) {
        slideArray[i].classList.remove('active');
    }
    slide++;
    if(slide > slideArray.length){
        slide = 1;
    }
    console.log(slide)
    if(slide === 3){
        yalanci.style.height = '320px';
    }
    else{
        yalanci.style.height = '300px';
    }
    slideArray[slide - 1].classList.add('active');
    setTimeout(carousel, 4000);
}

carousel();