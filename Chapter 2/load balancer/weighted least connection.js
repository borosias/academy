let servers = []
const length = (Math.floor(Math.random() * 5) + 5)

for (let i = 0; i < length; i++) {
    servers.push({name: `Server${i}`,weight:(Math.floor(Math.random() * 10)+1), connections: (Math.floor(Math.random() * 100)+1)})
}
function weightedLeastConnections() {
    let minConnections = servers[0];
    for (let i = 1; i < servers.length; i++) {
        const currentServer = servers[i];
        if (currentServer.connections / currentServer.weight < minConnections.connections / minConnections.weight) {
            minConnections = currentServer;
        }
    }
    return minConnections;
}
console.log(servers, "\nWeighted Least Connection:", weightedLeastConnections(servers))