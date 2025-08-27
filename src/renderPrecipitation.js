export default function renderPrecipitation(obj, container) {
    if (obj.precip) {
        const precip = document.createElement('span')
        precip.textContent = `Precipitation: ${obj.precip}"`

        container.appendChild(precip)

        // if (obj.preciptype) {
        //     const precipType = document.createElement('span')
        //
        //     precipType.textContent = `Type: ${obj.preciptype.join(', ')}`
        //
        //     container.appendChild(precipType)
        // }
    } else {
        if (obj.precipprob >= 0) {
            const precipProb = document.createElement('span')
            precipProb.textContent = `Chance of Precipitation: ${obj.precipprob}%`

            container.appendChild(precipProb)
        }
    }
}