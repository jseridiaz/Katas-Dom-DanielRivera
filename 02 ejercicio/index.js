// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
// document.querySelector('body')
let div = document.createElement('div')
let divP = document.createElement('div')
let div6P = document.createElement('div')

divP.className = 'añadir'
div6P.classList.add('6-parraf')

let parraf = 'este es un parrafo generado '
//* 1.1
document.body.appendChild(div)

//* 1.2
document.body.appendChild(divP)
divP.insertAdjacentHTML('afterbegin', parraf)
document.body.appendChild(div6P)

//* 1.3
let arrayP = ['Lorem ', 'ipsum ', 'dolor ', 'sit ', 'amet ', 'consectetur ']
for (let i = 0; i < arrayP.length; i++) {
  let element = arrayP[i]
  div6P.append(element)
}
//* 1.4
let parrafDinamic = 'Soy Dinamico!'
document.body.append(parrafDinamic)
//* 1.5
let h2 = document.querySelector('.fn-insert-here')
h2.append('Wubba Lubba dub dub')

//* 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

let ul = document.createElement('ul')

for (const rrss of apps) {
  let li = document.createElement('li')
  li.append(rrss)
  ul.appendChild(li)
}

h2.insertAdjacentElement('afterend', ul)

//* 1.7
let deleteNode = document.querySelectorAll('.fn-remove-me')
console.log(document.querySelectorAll('.fn-remove-me'))
for (const element of deleteNode) {
  element.remove()
}
//* 1.8
let divMiddleReading = document.querySelector('div')
let middleParraf = document.createElement('p')
middleParraf.textContent = 'Voy en medio!'

divMiddleReading.insertAdjacentElement('afterend', middleParraf)
//* 1.9
let insertDivsReading = document.querySelectorAll('div.fn-insert-here')

for (const element of insertDivsReading) {
  let innerParraf = document.createElement('p')
  innerParraf.innerHTML = 'Voy Dentro!'

  element.append(innerParraf)
}
