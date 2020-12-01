// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', setEventListeners)

function setEventListeners() {
    document.getElementById('takeoff').addEventListener('click', confirmTakeoff)
    document.getElementById('landing').addEventListener('click', land)
    document
        .getElementById('missionAbort')
        .addEventListener('click', abortMission)
    document.querySelectorAll('button').forEach((e) => {
        e.addEventListener('click', moveRocket)
    })
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
    }
}

function moveRocket({ target }) {
    const rocket = document.getElementById('rocket')
    const currentHeight = Number(
        document.getElementById('spaceShuttleHeight').innerText
    )
    const direction = target.innerText
    let currentMovement = 0
    switch (direction) {
        case 'Up':
            currentMovement = Number(rocket.style.top.replace('px', ''))
            rocket.style.top = `${currentMovement - 10}px`
            document.getElementById('spaceShuttleHeight').innerText =
                currentHeight + 10000
            break
        case 'Down':
            currentMovement = Number(rocket.style.top.replace('px', ''))
            rocket.style.top = `${currentMovement + 10}px`
            document.getElementById('spaceShuttleHeight').innerText =
                currentHeight - 10000
            break
        case 'Left':
            currentMovement = Number(rocket.style.left.replace('px', ''))
            rocket.style.left = `${currentMovement - 10}px`
            break
        case 'Right':
            currentMovement = Number(rocket.style.left.replace('px', ''))
            rocket.style.left = `${currentMovement + 10}px`
            break
        default:
            break
    }
}
