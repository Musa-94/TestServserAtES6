import Server from './Server';

const init = () => {
    const port = 2019;
    const server = new Server(port);

    server.init();
}

init();