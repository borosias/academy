class LRULoadBalancer {
    constructor(servers) {
        this.servers = servers;
        this.lastUsed = Array(servers.length).fill(0);
    }

    handleRequest(request) {
        let serverIndex = 0;
        for (let i = 1; i < this.servers.length; i++) {
            if (this.lastUsed[i] < this.lastUsed[serverIndex]) {
                serverIndex = i;
            }
        }


        this.lastUsed[serverIndex] = request.time;


        return this.servers[serverIndex];
    }
}

const servers = ['Server1', 'Server2', 'Server3', 'Server4'];
const loadBalancer = new LRULoadBalancer(servers);

const requests = [
    {time: 1, data: '...'},
    {time: 2, data: '...'},
    {time: 3, data: '...'},
    {time: 4, data: '...'},
    {time: 5, data: '...'}
];

for (const request of requests) {
    const server = loadBalancer.handleRequest(request);
    console.log(`Запрос на ${request.time} обрабатывается сервером: ${server}`);
}
