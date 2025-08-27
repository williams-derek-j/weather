export default function renderPrecipitation(obj, container) {
    console.log('hey', obj)
    if (obj.precip) {
        console.log(obj.precip)
        console.log(typeof obj.precip)

        const precip = document.createElement('span')
        precip.textContent = `Precipitation: ${obj.precip}"`

        container.appendChild(precip)

        if (obj.preciptype) {
            console.log(obj.preciptype)
            consoloe.log(typeof obj.preciptype)

            const precipType = document.createElement('span')
            precipType.textContent = `Type: ${obj.preciptype}`

            container.appendChild(precipType)
        }
    } else {
        if (obj.precipprob >= 0) {
            console.log(obj.precipprob)
            console.log(typeof obj.precipprob)

            const precipProb = document.createElement('span')
            precipProb.textContent = `Chance of Precipitation: ${obj.precipprob}%`

            container.appendChild(precipProb)
        }
    }
}