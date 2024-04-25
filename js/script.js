const button = document.querySelector('#addColor');
const body = document.querySelector('#container');


button.addEventListener('click', ()=>{

    const patrat = document.createElement('div')
    patrat.classList.add('patrat')
    body.append(patrat)

    patrat.addEventListener('mouseenter', (e)=>{
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        patrat.style.backgroundColor = `rgb(${r},${g},${b})`
    })
    patrat.addEventListener('mouseleave', (e)=>{
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        patrat.style.backgroundColor = `rgb(${r},${g},${b})`
    })
})

