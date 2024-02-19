// Предположим, у нас есть список серверов
const servers = [
    {name: 'Server1', requestCount: 0, maxRequests: 3},
    {name: 'Server2', requestCount: 0, maxRequests: 5},
    {name: 'Server3', requestCount: 0, maxRequests: 4},
    // Другие серверы...
];

function throttleBasedLoadBalancing() {
    const availableServers = servers.filter(server => server.requestCount < server.maxRequests);
    if (availableServers.length === 0) {
        return null;
    }


    const selectedServer = availableServers[Math.floor(Math.random() * availableServers.length)];
    selectedServer.requestCount++;
    return selectedServer;
}

for (let i = 0; i < 15; i++) {
    const selectedServer = throttleBasedLoadBalancing();
    if (selectedServer) {
        console.log(`Request ${i + 1} routed to ${selectedServer.name}`);
    } else {
        console.log(`Request ${i + 1} rejected - all servers reached their request limit`);
    }
}
