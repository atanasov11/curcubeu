const button = document.querySelector('#addColor');
const body = document.querySelector('#container');


button.addEventListener('click', ()=>{

    const patrat = document.createElement('div')
    patrat.classList.add('patrat')
    body.append(patrat)
})
