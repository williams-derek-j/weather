export default function renderHumidity(num, container) {
    const humidity = document.createElement('span')
    humidity.classList.add('humidity')
    humidity.textContent = `Humidity: ${num}%`

    container.appendChild(humidity)
}