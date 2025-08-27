export default function renderAlerts(alerts, container) {
    console.log(alerts)

    const alertsContainer = document.createElement('div')
    alertsContainer.classList.add('weatherAlertsContainer');

    alerts.forEach((alert) => {
        const alertContainer = document.createElement('div')
        alertContainer.classList.add('weatherAlertContainer')

        const alertRender = document.createElement('div')

        if (alert.event) {
            console.log(alert.event)

            alertRender.classList.add('weatherAlert')
            alertRender.classList.add(alert.event.replace(/\s/g, ""))
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

        container.appendChild(alertsContainer)
    })
}