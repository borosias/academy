let servers = new Array(10)
let tasks = new Array(30)


for (let i = 0; i < servers.length; i++) {
    servers[i] = {name: `Server${i}`, power: (Math.floor(Math.random() * 10) + 1)}
}
let count = 0
for (let i = tasks.length; i >= 0; i--) {
    tasks[i] = {name: `Task${count++}`, weight: (Math.floor(Math.random() * 5) + 1)}
}

console.log(servers)

function weightedRoundRobin(servers, tasks) {

    let tasksNotEmpty = true;
    while (tasksNotEmpty) {
        for (let server of servers) {
            let firstServerTaskComplete = false;
            let maxServerTasks = server.power;
            while (maxServerTasks > 0) {
                let task = tasks.pop()
                if (task) {
                    if (maxServerTasks - task.weight >= 0) {
                        console.log(`${task.name} was completed by ${server.name}`)
                        firstServerTaskComplete = true
                    } else if (maxServerTasks - task.weight < 0 && firstServerTaskComplete) {
                        console.log(`${task.name} was dropped`)
                    }
                    maxServerTasks -= task.weight;
                } else {
                    tasksNotEmpty = false
                    break;
                }
            }
        }
    }
}

weightedRoundRobin(servers, tasks);
