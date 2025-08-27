export default function renderPrecipitation(obj, container) {
    if (obj.precip) {
        const precip = document.createElement('span')
        precip.classList.add('precip')
        precip.textContent = `Precipitation: ${obj.precip}"`

        container.appendChild(precip)

        // if (obj.preciptype) {
        //     const precipType = document.createElement('span')
        //
        //     const array = []
        //     obj.preciptype.forEach((element) => {
        //         const type = element.charAt(0).toUpperCase() + element.slice(1);
        //         array.push(type)
        //     })
        //     const string = array.join(', ')
        //
        //     precipType.textContent = `Type: ${string}`
        //
        //     container.appendChild(precipType)
        // }
    } else {
        if (obj.precipprob >= 0) {
            const precipProb = document.createElement('span')
            precipProb.classList.add('precip')
            precipProb.textContent = `Chance of Precipitation: ${obj.precipprob}%`

            container.appendChild(precipProb)
        }
    }
}