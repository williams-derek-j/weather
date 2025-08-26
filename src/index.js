import "./style.css";
import clear from "./clear.js";
import fetchMock from "./fetchMock.js";

const content = document.querySelector('#content');

document.querySelector('#request').addEventListener('submit', (e) => {
    e.preventDefault();

    clear(content);

    let location = document.getElementById('location').value;
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=RVW49K3JHR36JZUMBDY4P35HZ&contentType=json`;

    fetchMock(url, {
        mode: 'cors',
    }).then((response) => {
        console.log(response)
        return response.json()
    }).then((responseObj) => {
        console.log(responseObj)

        if (responseObj.alerts) {
            console.log(responseObj.alerts)

            const alertsContainer = document.createElement('div')
            alertsContainer.classList.add('weatherAlertsContainer');

            responseObj.alerts.forEach((alert) => {
                const alertContainer = document.createElement('div')
                alertContainer.classList.add('weatherAlertContainer')

                const alertRender = document.createElement('div')

                if (alert.event) {
                    console.log(alert.event)

                    alertRender.classList.add('weatherAlert')
                    alertRender.classList.add(alert.event.replace(/\s/g, ""));
                    alertRender.append(document.createElement('span').textContent = alert.event)
                    alertContainer.appendChild(alertRender)

                    if (alert.ends) {
                        const timeEnd = document.createElement('span')
                        timeEnd.classList.add('timeEnd')

                        let date = 'Until: '
                        for (let char of alert.ends) {
                            if ('0123456789'.includes(char)) {
                                date += char;
                            } else if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char)) {
                                date += ' '
                            } else {
                                date += char;
                            }
                        }
                        timeEnd.textContent = date

                        alertContainer.appendChild(timeEnd)
                    }
                }
                alertsContainer.appendChild(alertContainer)
                content.appendChild(alertsContainer)
            })
        }

        if (responseObj.currentConditions) {
            const conditionsContainer = document.createElement('div');
            conditionsContainer.classList.add('conditionsContainer')

            const conditionsContainerTitleContainer = document.createElement('div')
            const conditionsContainerTitle = document.createElement('span')
            conditionsContainerTitle.textContent = "Current Conditions:"
            conditionsContainerTitleContainer.appendChild(conditionsContainerTitle)

            conditionsContainer.appendChild(conditionsContainerTitleContainer)

            if (responseObj.currentConditions.icon) {
                const src = import(`./icons/${responseObj.currentConditions.icon}.png`)
                console.log(src)
                src.then((module) => {
                    const conditionsIcon = document.createElement('img')
                    conditionsIcon.classList.add('icon')
                    conditionsIcon.src = module.default
                    conditionsContainerTitleContainer.appendChild(conditionsIcon)//, conditionsContainerTitleContainer.children[0])
                }).catch((error) => {
                    console.log(error)
                })
            }

            if (responseObj.currentConditions.conditions) {
                console.log(responseObj.currentConditions.conditions)
                console.log(typeof responseObj.currentConditions.conditions)

                const conditions = document.createElement('span')
                conditions.textContent = `Weather: ${responseObj.currentConditions.conditions}`
                conditionsContainer.appendChild(conditions);
            }

            if (responseObj.currentConditions.temp) {
                console.log(responseObj.currentConditions.temp)
                console.log(typeof responseObj.currentConditions.temp)

                const temp = document.createElement('span')
                temp.textContent = `Temperature: ${responseObj.currentConditions.temp}° F`
                conditionsContainer.appendChild(temp);
            }

            if (responseObj.currentConditions.feelslike) {
                console.log(responseObj.currentConditions.feelslike)
                console.log(typeof responseObj.currentConditions.feelslike)

                const feelsLike = document.createElement('span')
                feelsLike.textContent = `Feels Like: ${responseObj.currentConditions.feelslike}° F`
                conditionsContainer.appendChild(feelsLike);
            }

            if (responseObj.currentConditions.humidity) {
                console.log(responseObj.currentConditions.humidity)
                console.log(typeof responseObj.currentConditions.humidity)

                const humidity = document.createElement('span')
                humidity.textContent = `Humidity: ${responseObj.currentConditions.humidity}%`
                conditionsContainer.appendChild(humidity)
            }

            console.log(`test ${responseObj.currentConditions.precip > 0}`)
            if (responseObj.currentConditions.precip) {
                console.log(responseObj.currentConditions.precip)
                console.log(typeof responseObj.currentConditions.precip)

                const precip = document.createElement('span')
                precip.textContent = `Precipitation: ${responseObj.currentConditions.precip}"`
                conditionsContainer.appendChild(precip)

                if (responseObj.currentConditions.preciptype) {
                    console.log(responseObj.currentConditions.preciptype)
                    consoloe.log(typeof responseObj.currentConditions.preciptype)

                    const precipType = document.createElement('span')
                    precipType.textContent = `Type: ${responseObj.currentConditions.preciptype}`
                    conditionsContainer.appendChild(precipType)
                }
            } else {
                if (responseObj.currentConditions.precipprob >= 0) {
                    console.log(responseObj.currentConditions.precipprob)
                    console.log(typeof responseObj.currentConditions.precipprob)

                    const precipProb = document.createElement('span')
                    precipProb.textContent = `Chance of Precipitation: ${responseObj.currentConditions.precipprob}%`
                    conditionsContainer.appendChild(precipProb)
                }
            }

            console.log(conditionsContainer)
            content.appendChild(conditionsContainer)
        }
    }).catch((error) => {
        console.log(error)
    });
})