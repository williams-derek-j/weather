import "./style.css";

const content = document.querySelector('#content');

document.querySelector('#request').addEventListener('submit', (e) => {
    e.preventDefault();

    let location = document.getElementById('location').value;
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=RVW49K3JHR36JZUMBDY4P35HZ&contentType=json`;

    fetch(url, {
        mode: 'cors',
    }).then((response) => {
        return response.json();
    }).then((responseObj) => {
        console.log(responseObj);
        console.log(typeof responseObj);
        if (responseObj.alerts) {
            responseObj.alerts.forEach((alert) => {
                const alertRender = document.createElement('div');

                if (alert.event) {
                    // const span = document.createElement('span');
                    // span.classList.add(alert.event);
                    console.log(alert.event);

                    alertRender.classList.add('weatherAlert');
                    alertRender.classList.add(alert.event.replace(/\s/g, ""));
                    alertRender.append(document.createElement('span').textContent = alert.event);
                }

                content.appendChild(alertRender);
            })
        }
    }).catch((error) => {
        console.log(error);
    });
})