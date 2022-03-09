import { useState, useContext, useEffect } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

const Index = () => {
	const [createProduct, setCreateProduct] = useState({
		name: "",
		image: [],
		description: "",
		price: "0",
		brand: "",
		category: ""
	});
	const [createProducts, setCreateProducts] = useState([]);
	const {
		state: { user, product },
		dispatch
	} = useContext(Context);

	useEffect(() => {
		if (user === null) router.push("/login");
		if (product === null) router.push("/product/create");
	});

	const router = useRouter();
	return (
		<>
			{/* <h1 className='text-center'></h1> */}

			{product && <h1>{product && product.name}</h1>}
		</>
	);
};

export default Index;
