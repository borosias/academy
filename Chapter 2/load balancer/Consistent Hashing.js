class ConsistentHashing {
    constructor(servers = [], replicas = 3) {
        this.servers = [];
        this.replicas = replicas;
        this.circle = {};

        servers.forEach(server => this.addServer(server));
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0;
        }
        return hash;
    }

    addServer(server) {
        this.servers.push(server);
        for (let i = 0; i < this.replicas; i++) {
            const replicaKey = `${server}:${i}`;
            const hash = this.hash(replicaKey);
            this.circle[hash] = server;
        }
    }

    removeServer(server) {
        this.servers = this.servers.filter(s => s !== server);
        for (let i = 0; i < this.replicas; i++) {
            const replicaKey = `${server}:${i}`;
            const hash = this.hash(replicaKey);
            delete this.circle[hash];
        }
    }

    getServer(key) {
        const hash = this.hash(key);
        const keys = Object.keys(this.circle).sort((a, b) => a - b);

        for (const circleHash of keys) {
            if (hash <= circleHash) {
                return this.circle[circleHash];
            }
        }

        return this.circle[keys[0]];
    }
}


const consistentHash = new ConsistentHashing(['Server1', 'Server2', 'Server3']);

console.log(consistentHash.getServer('someKey'));

consistentHash.addServer('Server4');
console.log(consistentHash.getServer('anotherKey'));
