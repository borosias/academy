let servers = []
const length = (Math.floor(Math.random() * 10) + 1)

for (let i = 0; i < length; i++) {
    let time =  []
    for (let j = 0; j < 3; j++) {
        time.push(Math.floor(Math.random() * 50) + 1)
    }
    servers.push({name: `Server${i}`, responseTime: time})
}

function leastResponseTime() {
    let minResponseTime = servers[0].responseTime.reduce((acc,current)=>{return acc + current})/servers[0].responseTime.length;
    let server = servers[0]
    for (let i = 1; i < servers.length; i++) {
        let currentMidTime = servers[i].responseTime.reduce((acc,current)=>{return acc + current})/servers[i].responseTime.length;
        if ( currentMidTime < minResponseTime) {
            minResponseTime = currentMidTime;
            server = servers[i]
        }
    }

    return {name:server.name,time:Math.floor(minResponseTime)};
}

const selectedServer = leastResponseTime();
console.log(servers)
console.log(` \nLeast Response Time: ${selectedServer.name} with average time ${selectedServer.time} ms`);
