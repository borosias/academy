let servers = []
const length = (Math.floor(Math.random() * 10) + 1)

for (let i = 0; i < length; i++) {
    let time = []
    for (let j = 0; j < 3; j++) {
        time.push(Math.floor(Math.random() * 100) + 1)
    }
    servers.push({name: `Server${i}`, responseTime: time})
}

function fastestResponseTime() {
    let server = servers[0]
    let minLastResponseTime = server.responseTime[server.responseTime.length - 1]
    for (let i = 1; i < servers.length; i++) {
        let currentLastRespTime = servers[i].responseTime[servers[i].responseTime.length-1]
        if (currentLastRespTime < minLastResponseTime) {
            minLastResponseTime = currentLastRespTime;
            server = servers[i]
        }
    }

    return {name: server.name, time: minLastResponseTime};
}

console.log(servers)
for (let i = 0; i < 10; i++) {
    const selectedServer = fastestResponseTime();
    console.log(` \nFastest Response Time: ${selectedServer.name} with last response time ${selectedServer.time} ms`);
    servers.forEach((server)=>{server.responseTime.push(Math.floor(Math.random() * 100) + 1)})
}