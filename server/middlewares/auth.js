import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			// console.log(decoded);

			req.user = await User.findById(decoded.id).select("-password");
			next();
		} catch (error) {
			console.log(error);
		}
	}
};

export const isAdmin = async (req, res) => {
	if (req.user && req.user.isAdmin) {
		next;
	} else {
		res.status(401);
		throw new Error("Not authorized");
	}
};
