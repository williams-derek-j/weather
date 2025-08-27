export default function renderFeelsLike(num, container) {
    const feelslike = document.createElement('span')
    feelslike.classList.add('feelslike');
    feelslike.textContent = `Feels Like: ${num}° F`

    container.appendChild(feelslike);
}