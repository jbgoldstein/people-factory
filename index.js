const personForm = document.querySelector('form')

const renderName = (personName) => {
    const nameItem = document.createElement('li')
    nameItem.textContent = 'Name: ' + personName
    return nameItem
}

const drawColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const renderColor = (hairColor) => {
    const colorItem = document.createElement('li')
    const colorDiv = drawColor(hairColor)
    colorItem.textContent = 'Hair Color: '
    colorItem.appendChild(colorDiv)
    return colorItem
}

const renderAge = (age) => {
    const ageItem = document.createElement('li')
    ageItem.textContent = 'Age: ' + age
    return ageItem
}

const renderBirthplace = (birthplace) => {
    const birthplaceItem = document.createElement('li')
    birthplaceItem.textContent = 'Birthplace: ' + birthplace
    return birthplaceItem
}

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthplace = form.birthplace.value

    const nameItem = renderName(personName)
    const colorItem = renderColor(hairColor)
    const ageItem = renderAge(age)
    const birthplaceItem = renderBirthplace(birthplace)

    const list = document.createElement('ul')

     list.appendChild(nameItem)
     list.appendChild(colorItem)
     list.appendChild(ageItem)
     list.appendChild(birthplaceItem)

     details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)