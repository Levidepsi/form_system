import { Select, Button } from "antd";

const { Option } = Select;

const Product = ({
	handleChange,
	createProduct,
	setCreateProduct,
	uploadImage,
	uploadButtonText,
	handleSubmit
}) => {
	const children = [];
	const stock = [];
	for (let i = 9.99; i <= 99.99; i++) {
		children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>);
	}
	for (let i = 0; i <= 20; i++) {
		stock.push(<Option key={i}>{i}</Option>);
	}
	return (
		<>
			{createProduct && (
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<input
							type='text'
							name='name'
							className='form-control'
							placeholder='Product Name'
							value={createProduct.name}
							onChange={handleChange}
						/>
					</div>

					<div className='form-row pt-2'>
						<div className='col'>
							<div className='form-group'>
								<label
									className='btn btn-outline-secondary btn-block text-left'
									style={{ width: "100%" }}
								>
									{uploadButtonText}
									<input type='file' name='image' onChange={uploadImage} />
								</label>
							</div>
						</div>
					</div>

					<div className='form-group pt-3'>
						<textarea
							cols='7'
							rows='7'
							name='description'
							className='form-control'
							placeholder='Product Description'
							value={createProduct.description}
							onChange={handleChange}
						/>
					</div>

					<div className='form-group pt-3'>
						<input
							type='text'
							name='brand'
							className='form-control'
							placeholder='Brand Name'
							value={createProduct.brand}
							onChange={handleChange}
						/>
					</div>
					<div className='form-group pt-3'>
						<input
							type='text'
							name='category'
							className='form-control'
							placeholder='Category Name'
							value={createProduct.category}
							onChange={handleChange}
						/>
					</div>

					<div className='form-group pt-2'>
						<Select
							defaultValue='$9.99'
							style={{ width: "100%" }}
							onChange={v => setCreateProduct({ ...createProduct, price: v })}
							tokenSeparators={[,]}
							size='large'
						>
							{children}
						</Select>
					</div>
					{/* )} */}
					<div className='form-group pt-2 d-flex justify-content-center'>
						<div>
							<p>Count In Stock</p>
						</div>
						<div>
							<Select
								defaultValue='0'
								style={{ width: "100%" }}
								onChange={v => setCreateProduct({ ...createProduct, price: v })}
								tokenSeparators={[,]}
								size='large'
							>
								{stock}
							</Select>
						</div>
					</div>

					<div className='row pt-3'>
						<div className='col'>
							<Button
								onClick={handleSubmit}
								disabled={createProduct.loading || createProduct.uploading}
								className='brn btn-primary'
								loading={createProduct.loading}
								type='primary'
								size='large'
								shape='round'
							>
								{createProduct.loading ? "Saving Text..." : "Save & Continue"}
							</Button>
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default Product;
