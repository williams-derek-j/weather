export default function renderConditions(string, container) {
    const conditions = document.createElement('span')
    conditions.textContent = `Weather: ${string}`

    container.appendChild(conditions);
}