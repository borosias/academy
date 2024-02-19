class DNSBasedLoadBalancer {
    constructor(servers) {
        this.servers = servers;
        this.n = servers.length;
        this.index = 0;
    }

    getServer() {
        let server = this.servers[this.index];
        this.index = (this.index + 1) % this.n;
        return server;
    }
}

let loadBalancer = new DNSBasedLoadBalancer(["192.168.0.1", "192.168.0.2", "192.168.0.3"]);


for(let i = 0; i < 10; i++) {
    let server = loadBalancer.getServer();
    console.log(`Sending request #${i+1} to server:`, server);
}

