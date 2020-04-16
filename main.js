const nav = document.getElementById('nav'),
headings = document.querySelectorAll('.headings'),
hr = document.querySelectorAll('.hr'),
inputSend = document.getElementById('input-send'),
btnPro = document.getElementById('btn-pro'),
proListHeader = document.getElementById('pro-list-header')


var list = document.querySelectorAll('.clr-container li');


for(var i = 0 ; i < list.length ; i++){
    list[i].style.backgroundColor = list[i].getAttribute('clr');

    list[i].addEventListener('click',function(){

        nav.style.backgroundColor = this.getAttribute('clr');
        inputSend.style.backgroundColor = this.getAttribute('clr');
        btnPro.style.backgroundColor = this.getAttribute('clr');
        proListHeader.style.backgroundColor = this.getAttribute('clr');

        for(var j = 0 ; j < headings.length ; j++){
            headings[j].style.color = this.getAttribute('clr');
        }

        for(var h = 0 ; h < hr.length ; h++){
            hr[h].style.borderColor = this.getAttribute('clr')
        }

    })
}

//prevent context :P
document.addEventListener('contextmenu',function(e){
    e.preventDefault()
})

//arrow up
const arrowUp = document.getElementById('arrow-up');

arrowUp.onclick = function(){
    window.scrollTo(0,0);
}

window.onscroll = function(){
    if(window.scrollY >= 2670){
        arrowUp.style.visibility = 'visible'
    }else{
        arrowUp.style.visibility = 'hidden'
    }
}

//highlighting ^^

var home = document.getElementById('homeNav')
var showcase = document.getElementById('showcaseNav')
var services = document.getElementById('servicesNav')
var designers = document.getElementById('designersNav')
var package = document.getElementById('packagesNav')
var contact = document.getElementById('contactNav')


//default highlight
window.onload = function (){
    home.style.backgroundColor = '#FFF'
    home.style.color = '#000'
    nav.style.width = '19.9%' // seems to fix layout problems which happens at refresh :/
}


document.onscroll = function(){

    var homeY = document.getElementById('home').offsetTop
    var showcaseY = document.getElementById('showcase').offsetTop
    var servicesY = document.getElementById('services').offsetTop
    var designersY = document.getElementById('designers').offsetTop
    var packageY = document.getElementById('packages').offsetTop
    var contactY = document.getElementById('contact').offsetTop

    if(window.scrollY <= homeY){
        removeClass()
        home.style.backgroundColor = '#FFF'
        home.style.color = '#000'
    } else if(window.scrollY >= showcaseY && window.scrollY < servicesY){
        removeClass()
        showcase.style.backgroundColor = '#FFF'
        showcase.style.color = '#000'
    } else if(window.scrollY >= servicesY && window.scrollY < designersY){
        removeClass()
        services.style.backgroundColor = '#FFF'
        services.style.color = '#000'
    } else if(window.scrollY >= designersY && window.scrollY < packageY){
        removeClass()
        designers.style.backgroundColor = '#FFF'
        designers.style.color = '#000'
    } else if(window.scrollY >= packageY && window.scrollY < contactY*0.95){
        removeClass()
        package.style.backgroundColor = '#FFF'
        package.style.color = '#000'
    } else if(window.scrollY >= contactY*0.95){
        removeClass()
        contact.style.backgroundColor = '#FFF'
        contact.style.color = '#000'
    }
}

function removeClass(){
    home.classList.remove('highlight')
    home.style.backgroundColor = ''
    home.style.color = ''
    showcase.classList.remove('highlight')
    showcase.style.backgroundColor = ''
    showcase.style.color = ''
    services.classList.remove('highlight')
    services.style.backgroundColor = ''
    services.style.color = ''
    designers.classList.remove('highlight')
    designers.style.backgroundColor = ''
    designers.style.color = ''
    package.classList.remove('highlight')
    package.style.backgroundColor = ''
    package.style.color = ''
    contact.classList.remove('highlight')
    contact.style.backgroundColor = ''
    contact.style.color = ''
}


// finish highlighting

//This feature code was tiring but I will make it shorter in the future ^^