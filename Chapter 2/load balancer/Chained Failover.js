class Server {
    constructor(name) {
        this.name = name;
    }
    processRequest() {
        if (Math.random() < 0.5) {
            return null;
        }
        return `${this.name} response`;
    }
}


let servers = []
for (let i = 0; i < Math.floor(Math.random()*5+5); i++) {
    servers.push(new Server(`Server${i+1}`))
}

class ChainedFailOver {
    constructor(servers = []) {
        this.servers = servers;
        this.currentServerIndex = 0;
    }

    request() {
        let currentServer = this.servers[this.currentServerIndex];
        let attempts = 0;
        while (attempts < this.servers.length) {
            const response = currentServer.processRequest();
            if (response !== null) {
                return response; // Возвращаем успешный ответ
            } else {
                console.log(`Server ${currentServer.name} not response.`); // Выводим сообщение об ошибке
            }
            this.currentServerIndex = (this.currentServerIndex + 1) % this.servers.length;
            currentServer = this.servers[this.currentServerIndex];
            attempts++;
        }
        return 'Servers unavailable ';
    }
}

const chainedFailOver = new ChainedFailOver(servers);
console.log(servers)
const numOfRequests = 10;
for (let i = 0; i < numOfRequests; i++) {
    const response = chainedFailOver.request();
    console.log(`Request${i + 1}: ${response}`);
}
