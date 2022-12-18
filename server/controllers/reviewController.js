const {Review} = require("../models/models");

class ReviewController {

    async create(req, res) {
        const {user_name, description, rating} = req.body
        const review = await Review.create({user_name, description, rating});
        return res.json(review)
    }

    async get(req, res) {
        const reviews = await Review.findAll();
        return res.json(reviews)
    }

}

module.exports = new ReviewController()