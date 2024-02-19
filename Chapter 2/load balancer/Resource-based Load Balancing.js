let servers = []

const getRandomUsage = () => {
    return Math.floor(Math.random() * 90) + 10
};
for (let i = 0; i < 5; i++) {
    servers.push({name: `Server${i + 1}`, cpuUsage: getRandomUsage(), ramUsage: getRandomUsage()})
}

function resourceBasedLoadBalancing() {
    return servers.reduce((prev, current) => {
        const prevLoad = prev.cpuUsage + prev.ramUsage;
        const currentLoad = current.cpuUsage + current.ramUsage;
        return (currentLoad < prevLoad) ? current : prev;
    });
}

for (let i = 0; i < 10; i++) {
    const selectedServer = resourceBasedLoadBalancing();
    console.log(`Request ${i + 1} routed to ${selectedServer.name} (CPU:${selectedServer.cpuUsage} RAM:${selectedServer.ramUsage})`);
    servers.forEach(v => {
        v.cpuUsage = getRandomUsage();
        v.ramUsage = getRandomUsage()
    })
}
