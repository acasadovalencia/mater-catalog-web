'use strict'

//Cuando se hace scroll up a la ventana, el section 1 sube y se oculta y el section 2 sube y se muestra
//Cuando se hace scroll down a la ventana, el section 2 baja y se oculta y el section 1 baja y se muestra

//Cuando se pulsa en el boton menu, aparece el menú de derecha a izquierda

//Cuando se entra en el nombre del menu Collection, aparece el submenú
//Cuando se sale del nombre del menu Collection, desaparece el submenu

const textContainers = document.querySelectorAll('.Text-container')
const imageContainers = document.querySelectorAll('.Image-container')
const selectorLis = document.querySelectorAll('.Selector-li')
const headerBtn = document.querySelector('.Header-btn')
const nav = document.querySelector('.Nav')
const headerSvgLine = document.querySelectorAll('.Svg-line')
const headerLogo = document.querySelector('.Header-logo')
const navText = document.querySelector('.Nav-text')
const navLi = document.querySelectorAll('.Nav-li')
const navSubUl = document.querySelectorAll('.Nav-subUl')
const navSubLi = document.querySelectorAll('.Nav-subLi')
const navImage = document.querySelectorAll('.Nav-picture')

let position

window.addEventListener('mousewheel' , (e)=>{
    if(e.deltaY > 0){
        position = 1
    } else {
        position = 0
    }
    textContainers.forEach((each , i)=>{
        textContainers[i].classList.remove('isActive')
        textContainers[position].classList.add('isActive')
    })
    imageContainers.forEach((each , i)=>{
        imageContainers[i].classList.remove('isActive')
        imageContainers[position].classList.add('isActive')
    })
    selectorLis.forEach((each , i) =>{
        selectorLis[i].classList.remove('isActive')
        selectorLis[position].classList.add('isActive')
    })
})

selectorLis.forEach((each , i)=>
    selectorLis[i].addEventListener('click' , ()=>{
        textContainers.forEach((each , i)=>{
            textContainers[i].classList.remove('isActive')
        })
        textContainers[i].classList.add('isActive')

        imageContainers.forEach((each , i)=>{
            imageContainers[i].classList.remove('isActive')
        })
        imageContainers[i].classList.add('isActive')

        selectorLis.forEach((each , i)=>{
            selectorLis[i].classList.remove('isActive')
        })
        selectorLis[i].classList.add('isActive')
    })
)


headerBtn.addEventListener('click' , ()=>{
    nav.classList.toggle('isActive')
    headerBtn.classList.toggle('isActive')
    headerSvgLine.forEach((each , i)=>{
        headerSvgLine[i].classList.toggle('isActive')
    })
    headerLogo.classList.toggle('isActive')
    navText.classList.toggle('isActive')

})

navLi.forEach((each , i)=>{
    navLi[i].addEventListener('mouseover' , ()=>{
        navSubUl[i].classList.add('isActive')
        navLi[i].classList.add('isActive')
    })
    navLi[i].addEventListener('mouseout' , ()=>{
        navSubUl[i].classList.remove('isActive')
        navLi[i].classList.remove('isActive')
    })
})

navSubLi.forEach((each , i)=>{
    navSubLi[i].addEventListener('mouseover' , ()=>{
        navSubLi[i].classList.add('isActive')
        navImage[i].classList.add('isActive')
    })
    navSubLi[i].addEventListener('mouseout' , ()=>{
        navSubLi[i].classList.remove('isActive')
        navImage[i].classList.remove('isActive')
    })
})