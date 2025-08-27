export default function renderTemp(num, container) {
    const temp = document.createElement('span')
    temp.textContent = `Temperature: ${num}° F`

    container.appendChild(temp);
}