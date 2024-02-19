const servers = [
    'Server1',
    'Server2',
    'Server3',
    'Server4'
];

function hashURL(url) {
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
        hash = (hash << 5) - hash + url.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

function urlHashLoadBalancing(requestURL) {
    const hash = hashURL(requestURL);
    const index = Math.abs(hash) % servers.length;
    return servers[index];
}

const requestURLs = ['https://example.com/somepage','https://dodo.com/home','https://homecharge.com/page/11263','https://google.com']; // Пример URL-адреса запроса

for (const requestURL of requestURLs) {
    const selectedServer = urlHashLoadBalancing(requestURL);
    console.log(`URL: ${requestURL} connected to : ${selectedServer}`);
}