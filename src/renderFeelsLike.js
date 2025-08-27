export default function renderFeelsLike(num, container) {
    const feelsLike = document.createElement('span')
    feelsLike.textContent = `Feels Like: ${num}° F`

    container.appendChild(feelsLike);
}