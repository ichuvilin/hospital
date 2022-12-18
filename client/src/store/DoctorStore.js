import {makeAutoObservable} from "mobx"

export default class DoctorStore {
    constructor() {
        this._doctors = [];
        makeAutoObservable(this);
    }

    setDoctors(value) {
        this._doctors = value;
    }

    get doctors() {
        return this._doctors;
    }
}