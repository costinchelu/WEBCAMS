import {EventEmitter} from 'fbemitter'
const SERVER = "http://localhost:8080";

// getWebcam comunică cu API-ul creat pentru a primi un link pentru streaming
class CityStore{
    constructor() {
        this.cities = [];
        this.link = "";
        this.emitter = new EventEmitter();
    }
    async getAll(rId) {
        try {
            let response = await fetch(`${SERVER}/regions/${rId}/cities`);
            this.cities = await response.json();
            this.emitter.emit('GET_CITIES_BY_REGION_OK')
        } catch (e) {
            console.warn(e);
            this.emitter.emit('GET_CITIES_BY_REGION_ERROR')
        }
    }

    async getOne(rId, cId) {
        try{
            let response = await fetch(`${SERVER}/regions/${rId}/cities/${cId}`);
            this.cities = await response.json();
            this.emitter.emit('GET_CITY_BY ID_OK')
        } catch(e) {
            console.warn(e);
            this.emitter.emit('GET_CITY_BY ID_ERROR')
        }
    }

    async addOne(rId, city) {
        try {
            await fetch(`${SERVER}/regions/${rId}/cities`, {
                method:'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(city)
            });
            this.emitter.emit('ADD_CITY_OK');
            this.getAll(rId);
        } catch (e) {
            console.warn(e);
            this.emitter.emit('ADD_CITY_ERROR')
        }
    }

    async saveOne(rId, cId, city) {
        try {
            await fetch(`${SERVER}/regions/${rId}/cities/${cId}`, {
                method:'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(city)
            });
            this.emitter.emit('EDIT_CITY_OK');
            this.getAll(rId);
        } catch (e) {
            console.warn(e);
            this.emitter.emit('EDIT_CITY_ERROR')
        }
    }

    async deleteOne(rId, cId) {
        try {
            await fetch(`${SERVER}/regions/${rId}/cities/${cId}`, {
                method:'delete'
            });
            this.emitter.emit('DELETE_CITY_OK');
            this.getAll(rId);
        } catch (e) {
            console.warn(e);
            this.emitter.emit('DELETE_CITY_ERROR')
        }
    }

    async getWebcam(wId) {
        try {
            let response = await fetch(`${SERVER}/webcams/${wId}`);
            console.log(response);
            this.link = await response.json();
            this.emitter.emit('GET_WEBCAM_OK');
        } catch (e) {
            console.warn(e);
            this.emitter.emit('GET_WEBCAM_ERROR')
        }
    }
}

export default CityStore