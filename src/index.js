import "./style.css";
import fetchMock from "./fetchMock.js";

const content = document.querySelector('#content');

document.querySelector('#request').addEventListener('submit', (e) => {
    e.preventDefault();

    let location = document.getElementById('location').value;
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=RVW49K3JHR36JZUMBDY4P35HZ&contentType=json`;

    fetchMock(url, {
        mode: 'cors',
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((responseObj) => {
        console.log(responseObj);

        if (responseObj.alerts) {
            console.log(responseObj.alerts);

            responseObj.alerts.forEach((alert) => {
                const alertContainer = document.createElement('div');
                alertContainer.classList.add('weatherAlertContainer');

                const alertRender = document.createElement('div');

                if (alert.event) {
                    console.log(alert.event);

                    alertRender.classList.add('weatherAlert');
                    alertRender.classList.add(alert.event.replace(/\s/g, ""));
                    alertRender.append(document.createElement('span').textContent = alert.event);
                    alertContainer.appendChild(alertRender);

                    if (alert.ends) {
                        const timeEnd = document.createElement('span');
                        timeEnd.classList.add('timeEnd');

                        let date = 'Until: ';
                        for (let char of alert.ends) {
                            if ('0123456789'.includes(char)) {
                                date += char;
                            } else if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char)) {
                                date += ' ';
                            } else {
                                date += char;
                            }
                        }
                        timeEnd.textContent = date;

                        alertContainer.appendChild(timeEnd);
                    }
                }
                content.appendChild(alertContainer);
            })
        }

        if (responseObj.currentConditions) {
            const conditionsContainer = document.createElement('div');
            conditionsContainer.classList.add('conditionsContainer');
            conditionsContainer.append(document.createElement('span').textContent = "Current Conditions:")

            if (responseObj.currentConditions.conditions) {
                console.log(responseObj.currentConditions.conditions);

                const conditions = document.createElement('span').textContent = ` ${responseObj.currentConditions.conditions}`;
                conditionsContainer.append(conditions);
            }
            console.log(conditionsContainer);
            content.appendChild(conditionsContainer);
        }
    }).catch((error) => {
        console.log(error);
    });
})