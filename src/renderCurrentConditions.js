import renderTemp from './renderTemp.js'
import renderFeelsLike from './renderFeelsLike.js'
import renderHumidity from './renderHumidity.js'
import renderPrecipitation from './renderPrecipitation.js'

export default function(obj, container) {
    const conditionsContainer = document.createElement('div');
    conditionsContainer.classList.add('conditionsContainer')

    const conditionsContainerTitleContainer = document.createElement('div')
    const conditionsContainerTitle = document.createElement('span')
    conditionsContainerTitle.textContent = "Current Conditions:"

    conditionsContainerTitleContainer.appendChild(conditionsContainerTitle)

    conditionsContainer.appendChild(conditionsContainerTitleContainer)

    if (obj.icon) {
        const src = import(`./icons/${obj.icon}.png`)

        src.then((module) => {
            const conditionsIcon = document.createElement('img')
            conditionsIcon.classList.add('icon')
            conditionsIcon.src = module.default

            conditionsContainerTitleContainer.appendChild(conditionsIcon)//, conditionsContainerTitleContainer.children[0])
        }).catch((error) => {
            console.log(error)
        })
    }

    if (obj.conditions) {
        console.log(obj.conditions)
        console.log(typeof obj.conditions)

        const conditions = document.createElement('span')
        conditions.textContent = `Weather: ${obj.conditions}`

        conditionsContainer.appendChild(conditions);
    }

    if (obj.temp) {
        // console.log(obj.currentConditions.temp)
        // console.log(typeof obj.currentConditions.temp)
        //
        // const temp = document.createElement('span')
        // temp.textContent = `Temperature: ${obj.currentConditions.temp}° F`
        // conditionsContainer.appendChild(temp);
        renderTemp(obj.temp, conditionsContainer)
    }

    if (obj.feelslike) {
        // console.log(obj.feelslike)
        // console.log(typeof obj.feelslike)
        //
        // const feelsLike = document.createElement('span')
        // feelsLike.textContent = `Feels Like: ${obj.feelslike}° F`
        // conditionsContainer.appendChild(feelsLike);
        renderFeelsLike(obj.feelslike, conditionsContainer)
    }

    if (obj.humidity) {
        // console.log(obj.humidity)
        // console.log(typeof obj.humidity)
        //
        // const humidity = document.createElement('span')
        // humidity.textContent = `Humidity: ${obj.humidity}%`
        // conditionsContainer.appendChild(humidity)
        renderHumidity(obj.humidity, conditionsContainer)
    }

    // if (obj.precip) {
    //     console.log(obj.precip)
    //     console.log(typeof obj.precip)
    //
    //     const precip = document.createElement('span')
    //     precip.textContent = `Precipitation: ${obj.precip}"`
    //
    //     conditionsContainer.appendChild(precip)
    //
    //     if (obj.preciptype) {
    //         console.log(obj.preciptype)
    //         consoloe.log(typeof obj.preciptype)
    //
    //         const precipType = document.createElement('span')
    //         precipType.textContent = `Type: ${obj.preciptype}`
    //
    //         conditionsContainer.appendChild(precipType)
    //     }
    // } else {
    //     if (obj.precipprob >= 0) {
    //         console.log(obj.precipprob)
    //         console.log(typeof obj.precipprob)
    //
    //         const precipProb = document.createElement('span')
    //         precipProb.textContent = `Chance of Precipitation: ${obj.precipprob}%`
    //
    //         conditionsContainer.appendChild(precipProb)
    //     }
    // }
    renderPrecipitation({
            precip: obj.precip,
        preciptype: obj.preciptype,
        precipprob: obj.precipprob,
        },
        conditionsContainer
    )

    console.log(conditionsContainer)
    container.appendChild(conditionsContainer)
}