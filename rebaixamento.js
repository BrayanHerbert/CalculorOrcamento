let seuMetro = document.querySelector('#metro')
let larg = document.querySelector('#largura')
let compr = document.querySelector('#comprimento')
let but = document.querySelector('#but')
let res = document.querySelector('#res')

const CalcMetro = (a, b) =>{
    let resultMetro = a * b
    return resultMetro
}

const precoMetro = (a, b) =>{
    totalMetro = a * b
    return totalMetro
}

but.addEventListener('click', () =>{
    res.innerHTML = `Total de ${CalcMetro(larg.value, compr.value)} metros quadrados <br> Preço total de R$${precoMetro(seuMetro.value, CalcMetro(larg.value, compr.value))}`

})