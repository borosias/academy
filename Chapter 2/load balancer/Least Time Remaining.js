let servers = []
const length = (Math.floor(Math.random() * 5) + 5)

for (let i = 0; i < length; i++) {
    servers.push({name: `Server${i}`,timeRemaining: (Math.floor(Math.random() * 100))})
}

function leastTimeRemaining() {
    let minTimeRemainingServer = servers[0];

    for (let i = 1; i < servers.length; i++) {
        if (servers[i].timeRemaining < minTimeRemainingServer.timeRemaining) {
            minTimeRemainingServer = servers[i];
        }
    }

    return minTimeRemainingServer;
}

const selectedServer = leastTimeRemaining();
console.log(servers)
console.log(`\nLeast Time Remaining: ${selectedServer.name}`);
