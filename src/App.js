import path from 'path';
import express from 'express';

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../public')));
    }

    _app.post('/persons', (request, response) => {
        const {body} = request;

        response.json();
        response.end();
    });


    getApp = () => {
        return this._app;
    }
}

export default App;