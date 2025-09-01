import mongoose from "mongoose";
import Property from "./property.model.js";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "User name is required"],
    },
    photo: {
      type: String,
      required: [true, "User photo is required"],
    },
    review: {
      type: String,
      required: [true, "Review can not be an empty"],
    },
    rating: {
      type: Number,
      min: [1, "A minimum review should be 1"],
      max: [5, "A maximum review should be 5"],
      default: 3,
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    createdAt: { type: Date, default: Date.now },
    property: {
      type: mongoose.Schema.ObjectId,
      ref: "Property",
      required: [true, "Review must belong to the property"],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

reviewSchema.index({ property: 1 });

reviewSchema.statics.calcAverageRatings = async function (propID) {
  const stats = await this.aggregate([
    { $match: { property: propID } },
    {
      $group: {
        _id: "$property",
        nRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  console.log(stats);
  await Property.findByIdAndUpdate(propID, {
    rating: {
      average: stats.length <= 0 ? 4.5 : stats[0].avgRating,
      count: stats.length <= 0 ? 0 : stats[0].nRating,
    },
  });
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.property);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.model.findOne(this.getQuery());
  next();
});
reviewSchema.post(/^findOneAnd/, async function () {
  if (!this.r) return;
  await this.r.constructor.calcAverageRatings(this.r.property);
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
