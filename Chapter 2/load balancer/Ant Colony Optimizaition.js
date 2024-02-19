class Request {
    constructor(servers) {
        this.servers = servers;
        this.route = [];
        this.time = 0;
    }

    routeTime() {
        let time = 0;
        for (let i = 0; i < this.route.length - 1; i++) {
            time += this.servers[this.route[i]][this.route[i + 1]];
        }
        return time;
    }

    constructRoute() {
        let remainingServers = [...Array(this.servers.length).keys()];
        let currentServer = remainingServers.splice(Math.floor(Math.random() * remainingServers.length), 1)[0];
        this.route.push(currentServer);

        while (remainingServers.length > 0) {
            let probabilities = remainingServers.map(server => 1 / this.servers[currentServer][server]);
            let sum = probabilities.reduce((a, b) => a + b);
            probabilities = probabilities.map(probability => probability / sum);

            let r = Math.random();
            let index = 0;
            let total = probabilities[0];
            while (r > total) {
                index++;
                total += probabilities[index];
            }

            currentServer = remainingServers.splice(index, 1)[0];
            this.route.push(currentServer);
        }

        this.route.push(this.route[0]);
        this.time = this.routeTime();
    }
}

function aco(servers, iterations, numberOfRequests) {
    let bestRoute;
    let bestTime = Infinity;

    for (let i = 0; i < iterations; i++) {
        let requests = Array(numberOfRequests).fill().map(() => new Request(servers));

        requests.forEach(request => {
            request.constructRoute();
            if (request.time < bestTime) {
                bestRoute = request.route;
                bestTime = request.time;
            }
        });
    }

    return {bestRoute, bestTime};
}


const serversDistance = [
    [0, 2, 9, 10],
    [1, 0, 6, 4],
    [15, 7, 0, 8],
    [6, 3, 12, 0]
];
const iterations = 100;
const numberOfRequests = 10;

const result = aco(serversDistance, iterations, numberOfRequests);
console.log(`Best way: ${result.bestRoute.map(i => 'Server' + i).join(' -> ')}`);
console.log(`Way time: ${result.bestTime}`);
