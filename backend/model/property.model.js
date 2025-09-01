import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A Property must have a title"],
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "A House must have a description"],
    },
    details: {
      bedrooms: {
        type: Number,
        required: true,
      },
      beds: {
        type: Number,
        required: true,
      },
      bathrooms: {
        type: Number,
        required: true,
      },
      maxGuests: {
        type: Number,
        required: true,
      },
    },
    images: [String],
    amenities: [
      {
        name: { type: String, required: true },
        icon: { type: String, required: true }
      }
    ],
    features: [
      {
        name: { type: String, required: true },
        description: { type: String },
        icon: { type: String, required: true }
      },
    ],
    rating: {
      average: {
        type: Number,
        default: 4.5,
        min: [1.0, "Property ratings must be >= 1.0"],
        max: [5.0, "Property ratings must be <= 5.0"],
        set: (val) => Math.round(val * 10) / 10,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual for reviews
propertySchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "property",
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
