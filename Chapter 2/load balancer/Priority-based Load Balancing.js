let servers = []

for (let i = 0; i < 5; i++) {
    servers.push({name: `Server${i+1}`, priority: getRandomPriority()})
}
function getRandomPriority() {
    return (Math.floor(Math.random() * 3)+1)
}
function priorityBasedLoadBalancing() {
    servers.sort((a, b) => b.priority - a.priority);
    return servers[0];
}

for (let i = 0; i < 10; i++) {
    const selectedServer = priorityBasedLoadBalancing();
    console.log(`Request ${i + 1} routed to ${selectedServer.name} `);
    servers.forEach(v=>v.priority=getRandomPriority())
}
