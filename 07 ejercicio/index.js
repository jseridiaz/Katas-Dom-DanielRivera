// *Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

let divToInsert = document.querySelector('div[data-function="printHere"]')

let ul = document.createElement('ul')

for (const place of places) {
  let li = document.createElement('li')
  li.textContent = place
  ul.appendChild(li)
}

divToInsert.appendChild(ul)
