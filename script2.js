let preco = document.querySelector('#preco')
let altura = document.querySelector('#altura')
let comprimento = document.querySelector('#comprimento')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')

const CalculoMetro = (n1,n2) =>{
    let metro = n1 * n2
    return metro
}

const PrecoMetro = (n1, n2) =>{
  let totalMetro = n1 * n2
  return totalMetro
}

btn.addEventListener('click', () =>{
    res.innerHTML = `${CalculoMetro(altura.value, comprimento.value)} Metro Quadrado <br> R$${PrecoMetro(CalculoMetro(altura.value, comprimento.value), preco.value)}`
})