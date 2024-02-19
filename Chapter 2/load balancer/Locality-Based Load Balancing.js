let servers = new Array(5)
let tasks = new Array(10)


for (let i = 0; i < servers.length; i++) {
    servers[i] = {name: `Server${i}`, location:{ x:(Math.floor(Math.random() * 100) + 1),y:(Math.floor(Math.random() * 100) + 1)}}
}

for (let i = 0; i < tasks.length; i++) {
    tasks[i] = {name: `Task${i}`, userLocation: { x:(Math.floor(Math.random() * 100) + 1),y:(Math.floor(Math.random() * 100) + 1)}}
}
console.log(servers)
console.log(tasks)
export function distanceBetweenPoints(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.hypot(deltaX,deltaY);
}
function localityBasedLoadBalancing(servers,task){
    let minDistance = Infinity;
    let closetServer = null;
    for (const server of servers) {
        const dist = distanceBetweenPoints(task.userLocation.x,task.userLocation.y,server.location.x,server.location.y)
        if (dist < minDistance){
            minDistance = dist;
            closetServer = server;
        }
    }
    return {name:closetServer.name,distance: minDistance};
}

tasks.forEach((task)=>{
    let server = localityBasedLoadBalancing(servers,task)
    console.log(`${task.name} sent to ${server.name} in distance ${server.distance.toFixed(3)}`)
})
