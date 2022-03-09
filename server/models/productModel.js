import mongoose from "mongoose";

const productModel = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		image: { type: Object, default: "" },
		brand: {
			type: String,
			required: true
		},
		category: {
			type: Array
		},
		description: {
			type: String,
			required: true
		},
		rating: {
			type: Number,
			required: true,
			default: 0
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0
		},
		price: {
			type: Number,
			required: true,
			default: 0
		},
		countInStock: {
			type: Number,
			required: true,
			default: 0
		}
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productModel);

export default Product;
