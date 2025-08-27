import "./style.css";
import clear from "./clear.js";
import fetchMock from "./fetchMock.js";
import renderAlerts from "./renderAlerts.js";
import renderCurrentConditions from "./renderCurrentConditions.js";

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
            renderAlerts(responseObj.alerts, content)
        }
        if (responseObj.currentConditions) {
            renderCurrentConditions(responseObj.currentConditions, content)
        }
    }).catch((error) => {
        console.log(error)
    });
})