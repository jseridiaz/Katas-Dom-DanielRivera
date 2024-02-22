const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

let ul = document.createElement('ul')
for (const country of countries) {
  let li = document.createElement('li')
  li.innerHTML = country
  ul.appendChild(li)
}
document.body.appendChild(ul)

document.querySelector('.fn-remove-me').remove()

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

let ul2 = document.createElement('ul')

for (const car of cars) {
  let li = document.createElement('li')
  li.innerHTML = car
  ul2.appendChild(li)
}
let divToPrintCars = document
  .querySelector('[data-function="printHere"]')
  .appendChild(ul2)
ul.insertAdjacentElement('afterend', divToPrintCars)

const newCountries = [
  {
    title: 'Finland',
    imgUrl: 'https://picsum.photos/600/500?random=1'
  },
  { title: 'Norway', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Germany', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Grecee', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'EE.UU', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

let deletePicture = (i) => {
  clearInner()
  newCountries.splice(i, 1)
  printRandowImg(newCountries)
  document.body.appendChild(buttonLastDelete)
}

let printRandowImg = (arrayOfPictures) => {
  for (let i = 0; i < arrayOfPictures.length; i++) {
    element = arrayOfPictures[i]
    let div = document.createElement('div')
    let h4 = document.createElement('h4')
    div.classList.add('random')
    h4.textContent = element.title
    let img = document.createElement('img')
    let buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'Delete this picture'
    img.src = element.imgUrl

    buttonDelete.addEventListener('click', () => deletePicture(i))

    div.appendChild(h4)
    div.appendChild(img)
    div.appendChild(buttonDelete)
    document.body.appendChild(div)
  }
}
printRandowImg(newCountries)

let buttonLastDelete = document.createElement('button')
buttonLastDelete.textContent = 'Last Delete'

document.body.appendChild(buttonLastDelete)
let clearInner = () => {
  let iterator = document.querySelectorAll('.random')
  for (const div of iterator) {
    div.remove()
  }
}
let deleteLastFunction = (lastToDelete) => {
  clearInner() //*funcion donde se crea un nodo de los divs de las imagenes para eliminarlos todos y que cuando se vuelva a pintar el array estos se eliminen.
  newCountries.pop() //*Eliminar el ultimo array

  printRandowImg(newCountries) //*volver a pintar el nuevo array despues de eliminar el ultimo

  document.body.appendChild(buttonLastDelete) //*Este codigo es para volver a colocar el boton cuando se elimine el div al que esta adyacente, por que cuando se elemina el primer div este se arriva al siguiente container.
  console.log(newCountries)
}

buttonLastDelete.addEventListener('click', () =>
  deleteLastFunction(newCountries)
)
console.log(newCountries)
