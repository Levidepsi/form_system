import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
	const {
		name,
		price,
		image,
		brand,
		countInStock,
		numReviews,
		description,
		category
	} = req.body;

	const product = new Product({
		name,
		price,
		user: req.body.user,
		image,
		brand,
		countInStock,
		numReviews,
		description,
		category
	});
	const createProduct = await product.save();
	res.status(201).json(createProduct);
};

export const getProducts = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			res.status(404);
			throw new Error("Failed Finding Product");
		}
		// // prepare
		// const base64Data = new Buffer.from(
		// 	image.replace(/^data:image\/\w+;base64,/, "")
		// );
		console.log(product);
	} catch (error) {
		console.log(error);
	}
};
