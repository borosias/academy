const availableServers = ['Server1', 'Server2', 'Server3', 'Server4'];


function randomWithRetry() {
    let retries = availableServers.length;
    while (retries > 0) {
        const randomIndex = Math.floor(Math.random() * availableServers.length);
        const selectedServer = availableServers[randomIndex];

        const serverIsAvailable = Math.random() < 0.5;

        if (serverIsAvailable) {
            return selectedServer;
        } else {
            console.log(`${selectedServer} is unavailable`)
            retries--;
        }
    }

    return 'No available server';
}

const selectedServer = randomWithRetry();
console.log(`Выбранный сервер: ${selectedServer}`);
