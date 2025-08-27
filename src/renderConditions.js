export default function renderConditions(string, container) {
    const conditions = document.createElement('span')
    conditions.classList.add('conditions')
    conditions.textContent = `Weather: ${string}`

    container.appendChild(conditions);
}