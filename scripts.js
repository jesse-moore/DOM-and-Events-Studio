// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', onLoadFunction)

function onLoadFunction() {
    document.getElementById('takeoff').addEventListener('click', confirmTakeoff)
    document.getElementById('landing').addEventListener('click', land)
    document
        .getElementById('missionAbort')
        .addEventListener('click', abortMission)
    document.querySelectorAll('button').forEach((e) => {
        e.addEventListener('click', moveRocket)
    })
    document.getElementById('rocket').style.top = '250px'
}

function confirmTakeoff() {
    const isReady = window.confirm(
        'Confirm that the shuttle is ready for takeoff.'
    )
    if (isReady) {
        document.getElementById('flightStatus').innerText = 'Shuttle in flight.'
        document.getElementById('shuttleBackground').style.backgroundColor =
            'blue'
        document.getElementById('spaceShuttleHeight').innerText = 10000
    }
}

function land() {
    window.alert('The shuttle is landing. Landing gear engaged.')
    document.getElementById('shuttleBackground').style.backgroundColor = 'green'
    document.getElementById('spaceShuttleHeight').innerText = 0
    document.getElementById('rocket').style.top = '250px'
}

function abortMission() {
    const isAborted = window.confirm(
        'Confirm that you want to abort the mission.'
    )
    if (isAborted) {
        document.getElementById('flightStatus').innerText = 'Mission aborted.'
        document.getElementById('shuttleBackground').style.backgroundColor =
            'green'
        document.getElementById('spaceShuttleHeight').innerText = 0
        document.getElementById('rocket').style.top = '250px'
    }
}

function moveRocket({ target }) {
    const rocket = document.getElementById('rocket')
    const currentHeight = Number(
        document.getElementById('spaceShuttleHeight').innerText
    )
    const direction = target.innerText
    let currentPosition = 0
    switch (direction) {
        case 'Up':
            currentPosition = Number(rocket.style.top.replace('px', ''))
            if (currentPosition <= 0) return
            rocket.style.top = `${currentPosition - 10}px`
            document.getElementById('spaceShuttleHeight').innerText =
                currentHeight + 10000
            break
        case 'Down':
            currentPosition = Number(rocket.style.top.replace('px', ''))
            if (currentPosition >= 250) return
            rocket.style.top = `${currentPosition + 10}px`
            document.getElementById('spaceShuttleHeight').innerText =
                currentHeight - 10000
            break
        case 'Left':
            currentPosition = Number(rocket.style.left.replace('px', ''))
            if (currentPosition <= -160) return
            rocket.style.left = `${currentPosition - 10}px`
            break
        case 'Right':
            currentPosition = Number(rocket.style.left.replace('px', ''))
            if (currentPosition >= 160) return
            rocket.style.left = `${currentPosition + 10}px`
            break
        default:
            break
    }
}
