import {makeAutoObservable} from "mobx"

export default class ReviewStorage {
    constructor() {
        this._reviews = [];
        makeAutoObservable(this);
    }

    setReviews(value) {
        this._reviews = value;
    }

    get reviews() {
        return this._reviews;
    }
}