const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthplace = form.birthplace.value

    const em = document.createElement('em')
    em.textContent = personName

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'

    const ageDiv = document.createElement(div)
    ageDiv.textContent = age

    const birthplaceDiv = document.createElement(div)
    birthplaceDiv.textContent = birthplace

    details.innerHTML = `
    <u1>
        <li>Name: ${personName}</li>
        <li>Hair Color: ${colorDiv.outerHTML}</li>
        <li>Age: ${age}</li>
        <li>Birthplace: ${birthplace}</li>
    </u1>
    `
}