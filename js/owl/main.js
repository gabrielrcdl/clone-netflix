$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const button = document.getElementById('mais-info')
const popup = document.getElementById('popup')
const closePopup = document.getElementById('close')

button.addEventListener('click', open)


function open(){

    popup.style.display = 'block'
       
}


closePopup.addEventListener('click', close)


function close(){

    popup.style.display = 'none'
    
}