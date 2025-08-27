import renderIcon from './renderIcon.js'
import renderConditions from './renderConditions.js'
import renderTemp from './renderTemp.js'
import renderFeelsLike from './renderFeelsLike.js'
import renderHumidity from './renderHumidity.js'
import renderPrecipitation from './renderPrecipitation.js'

export default function(obj, container) {
    const conditionsContainer = document.createElement('div');
    conditionsContainer.classList.add('conditionsContainer')

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('titleContainer')

    const title = document.createElement('span')

    if (obj.datetime) {
        title.textContent = obj.datetime
    } else {
        title.textContent = ""
    }

    titleContainer.appendChild(title)

    conditionsContainer.appendChild(titleContainer)

    if (obj.icon) {
        renderIcon(obj.icon, titleContainer)
    }

    if (obj.conditions) {
        renderConditions(obj.conditions, conditionsContainer)
    }

    if (obj.temp) {
        renderTemp(obj.temp, conditionsContainer)
    }

    if (obj.feelslike) {
        renderFeelsLike(obj.feelslike, conditionsContainer)
    }

    if (obj.humidity) {
        renderHumidity(obj.humidity, conditionsContainer)
    }

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