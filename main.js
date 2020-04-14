const nav = document.getElementById('nav'),
headings = document.querySelectorAll('.headings'),
hr = document.querySelectorAll('.hr'),
inputSend = document.getElementById('input-send'),
btnPro = document.getElementById('btn-pro'),
proListHeader = document.getElementById('pro-list-header')


var list = document.querySelectorAll('.clr-container li');


console.log(list)
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
