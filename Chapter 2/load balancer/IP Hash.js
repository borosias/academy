const servers = [
    'Server1',
    'Server2',
    'Server3',
    'Server4'
];


function hashIP(ipAddress) {
    let hash = 0;
    for (let i = 0; i < ipAddress.length; i++) {
        hash = (hash << 5) - hash + ipAddress.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}


function ipHashLoadBalancing(clientIP) {
    const hash = hashIP(clientIP);
    const index = Math.abs(hash) % servers.length;
    return servers[index];
}

const clientIPAddresses = ['192.168.1.100','192.168.1.125',"192.168.1.2", "192.168.1.3", "192.168.1.1"]; // Пример IP-адреса клиента

for (const clientIPAddress of clientIPAddresses) {
    let selectedServer = ipHashLoadBalancing(clientIPAddress);
console.log(`IP: ${clientIPAddress} connected to : ${selectedServer}`);
}