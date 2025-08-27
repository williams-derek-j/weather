export default function renderIcon(string, container) {
    const imported = import(`./icons/${string}.png`)

    imported.then((module) => {
        const conditionsIcon = document.createElement('img')
        conditionsIcon.classList.add('icon')
        conditionsIcon.src = module.default

        container.appendChild(conditionsIcon)
    }).catch((error) => {
        console.log(error)
    })
}