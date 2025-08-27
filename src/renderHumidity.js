export default function renderHumidity(num, container) {
    const humidity = document.createElement('span')
    humidity.textContent = `Humidity: ${num}%`

    container.appendChild(humidity)
}