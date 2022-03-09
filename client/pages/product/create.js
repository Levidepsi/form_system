import { useState } from "react";
import Product from "../../components/Product";
import { useRouter } from "next/router";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { toast } from "react-toastify";

const Create = ({ product }) => {
	const [createProduct, setCreateProduct] = useState({
		name: "",
		description: "",
		price: "0",
		brand: "",
		category: ""
	});
	const [image, setImage] = useState({});
	const [preview, setPreview] = useState("");
	const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
	const [uploading, setUploading] = useState(false);

	const router = useRouter();

	const handleChange = e => {
		setCreateProduct({ ...createProduct, [e.target.name]: e.target.value });
	};

	const uploadImage = async e => {
		e.preventDefault();
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("image", file);
		setUploading(true);

		try {
			const config = {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			};

			const { data } = await axios.post("/api/upload-image", formData, config);
			console.log("Hello");

			setImage(data);
			setUploading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const { data } = await axios.post("/api/products", {
				...createProduct,
				image
			});
			console.log(data);
			toast.success("Product Create Success");
			router.push("/");
			window.localStorage.setItem("product", JSON.stringify(data));
		} catch (error) {
			console.log(error);
			toast(error.response.data);
		}
	};

	return (
		<div className='mt-5 text-center container col-md-4 offset-md-4 pb-5 '>
			<Product
				handleChange={handleChange}
				createProduct={createProduct}
				setCreateProduct={setCreateProduct}
				uploadImage={uploadImage}
				uploadButtonText={uploadButtonText}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default Create;
