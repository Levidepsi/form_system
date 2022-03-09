import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/userModel.js";

export const hashPassword = password => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(12, (err, salt) => {
			if (err) {
				reject(err);
			}
			bcrypt.hash(password, salt, (err, hash) => {
				if (err) {
					reject(err);
				}
				resolve(hash);
			});
		});
	});
};

export const comparePassword = (password, hashed) => {
	return bcrypt.compare(password, hashed);
};

export const protect = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.id);
			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error("Not Authorized, token failed");
		}
	}
	if (!token) {
		res.status(401);
		throw new Error("Not Authorized. No Token!");
	}
};
