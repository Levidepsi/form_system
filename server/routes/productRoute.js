import express from "express";
import path from "path";
import multer from "multer";
import { nanoid } from "nanoid";

import { createProduct, getProducts } from "../controllers/productAuth.js";

const router = express.Router();

router.post("/products", createProduct);
let storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./uploads");
	},
	filename: (req, file, callback) => {
		callback(null, Date.now() + file.originalname);
	}
});

// function checkFileType(file, callback) {
// 	const fileTypes = /jpg|jpeg|png/;
// 	const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
// 	const mimeType = fileTypes.test(file.mimeType);

// 	// console.log(mimeType);
// 	if (extname && mimeType) {
// 		return callback(null, true);
// 	} else {
// 		callback("Images Only!");
// 	}
// }

const upload = multer({
	storage: storage,
	limits: {
		fieldSize: 1024 * 1024 * 3
	}
});
router.post("/upload-image", upload.single("image"), (req, res, next) => {
	const file = req.file;
	if (!file) {
		const error = new Error("Please Upload a file");
		error.httpStatusCode = 400;
		return next(error);
	}
	res.send(file);
	console.log("Success", req.file);
});

router.get("/getProduct/:id", getProducts);

export default router;
