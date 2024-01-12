const mongoose = require("mongoose");

const AchievementsSchema = new mongoose.Schema({
    title: {type: String, required: false},
    CompleteDate: {type: Date, required: false},
    rewardForComplete: {type: Number, required: false},
    rarity: {type: String, required: true}
});


module.exports = mongoose.model("Achivements", AchievementsSchema);