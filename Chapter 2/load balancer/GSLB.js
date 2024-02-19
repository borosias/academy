let servers = [];
let tasks = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    servers.push({
        name: `Server${i}`,
        location: {
            x: getRandom(1, 500),
            y: getRandom(1, 500)
        },
        zone: `Zone${getRandom(1, 3)}`,
        failureProbability: Math.random() < 0.3 ? 0.8 : 0.1
    });
}

for (let i = 0; i < 10; i++) {
    tasks.push({
        name: `Task${i}`,
        userLocation: {
            x: getRandom(1, 500),
            y: getRandom(1, 500)
        },
        zone: `Zone${getRandom(1, 3)}`
    });
}
function distance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.hypot(deltaX,deltaY);
}
function globalServerLoadBalancing(servers, task) {
    let minDistance = Infinity;
    let closestServer = null;
    for (const server of servers) {
        if (server.zone === task.zone && server.failureProbability < Math.random()) {
            const dist = distance(task.userLocation.x, task.userLocation.y, server.location.x, server.location.y);
            if (dist < minDistance) {
                minDistance = dist;
                closestServer = server;
            }
        }
    }
    return closestServer ? { name: closestServer.name, distance: minDistance.toFixed(3), location: closestServer.location, zone: closestServer.zone } : null;
}

console.log(servers)
console.log(tasks)
tasks.forEach((task) => {
    let server = globalServerLoadBalancing(servers, task);
    if (server) {
        console.log(`${task.name} sent to ${server.name} in distance ${server.distance} from location (${task.userLocation.x}, ${task.userLocation.y}) in zone ${task.zone}. Closest server located at (${server.location.x}, ${server.location.y}) in zone ${server.zone}`);
    } else {
        console.log(`No available server for ${task.name} in zone ${task.zone}`);
    }
});
