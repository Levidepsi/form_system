import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();

const app = express();

mongoose
	.connect(`${process.env.MONGO_DB}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log(`DB Connected to DB`);
	})
	.catch(error => {
		console.log(error);
	});

// middlewares
app.use(express.json({ limit: "5mb" }));
app.use(cors());

// routes
app.use("/api", userRoute);
app.use("/api", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`));
