import {EventEmitter} from 'fbemitter'
const SERVER = "http://localhost:8080";

class RegionStore{
    constructor() {
        this.regions = [];
        this.emitter = new EventEmitter();
    }

    async getAll() {
        try {
            let response = await fetch(`${SERVER}/regions`);
            this.regions = await response.json();
            this.emitter.emit('GET_REGIONS_OK')
        } catch (e) {
            console.warn(e);
            this.emitter.emit('GET_REGIONS_ERROR')
        }
    }

    async addOne(region) {
        try {
            await fetch(`${SERVER}/regions`, {
                method:'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(region)
            });
            this.emitter.emit('ADD_REGION_OK');
            this.getAll();
        } catch (e) {
            console.warn(e);
            this.emitter.emit('ADD_REGION_ERROR')
        }
    }

    async saveOne(id, region) {
        try {
            await fetch(`${SERVER}/regions/${id}`, {
                method:'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(region)
            });
            this.emitter.emit('EDIT_REGION_OK');
            this.getAll();
        } catch (e) {
            console.warn(e);
            this.emitter.emit('EDIT_REGION_ERROR')
        }
    }

    async deleteOne(id) {
        try {
            await fetch(`${SERVER}/regions/${id}`, {
                method:'delete'
            });
            this.emitter.emit('DELETE_REGION_OK');
            this.getAll();
        } catch (e) {
            console.warn(e);
            this.emitter.emit('DELETE_REGION_ERROR')
        }
    }
}

export default RegionStore