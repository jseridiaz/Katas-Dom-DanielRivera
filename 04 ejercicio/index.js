//* <!-- 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//* evento click que ejecute un console log con la información del evento del click

//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. -->

let button = document.createElement('button')
button.id = 'btn-to-click'
button.className = 'nuevo'
button.textContent = 'Boton para recoger el evento en consola'

button.addEventListener('click', (e) => {
  console.log(e)
})

document.body.appendChild(button)

let inputsReaded = document.querySelectorAll('input')
let valueGetting = (i) => {
  console.log(inputsReaded[i].value)
}
let readInputs = (arrayToRead) => {
  for (let i = 0; i < inputsReaded.length; i++) {
    element = inputsReaded[i]
    element.addEventListener('focus', () => valueGetting(i))
    element.addEventListener('input', () => valueGetting(i))
  }
}

readInputs(inputsReaded)
