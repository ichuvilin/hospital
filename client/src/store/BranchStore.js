import {makeAutoObservable} from "mobx"

export default class BranchStore {
    constructor() {
        this._branch = [];
        makeAutoObservable(this);
    }

    setBranch(value) {
        this._branch = value;
    }

    get branch() {
        return this._branch;
    }
}