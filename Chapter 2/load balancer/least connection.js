let servers = []
const length = (Math.floor(Math.random() * 20) + 1)

for (let i = 0; i < length; i++) {
    servers.push({name: `Server${i}`, connections: (Math.floor(Math.random() * 100))})
}

function leastConnection(servers) {
    let minConn = servers[0];
    for (let i = 0; i < servers.length; i++) {
        if (servers[i].connections < minConn.connections) {
            minConn = servers[i]
        }
    }
    return minConn
}


console.log(servers, "\nLeast Connection:", leastConnection(servers))

