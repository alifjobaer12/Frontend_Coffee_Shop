const ProductCard = (props) => {
	return (
		<div className=" relative flex flex-col items-center pb-5">
			<div className="flex flex-col items-center rounded-2xl bg-[#e2c8ae7d] overflow-hidden">
				<img
					className="h-70 w-70 object-cover"
					src={props.img}
					alt="product"
				/>
				<div className="flex items-center justify-between w-full px-5 pt-3 pb-7 text-lg font-Arile font-medium text-[#6B3E26]">
					<h1> {props.title} </h1>
					<h1> {props.price} </h1>
				</div>
			</div>
			<button className=" absolute bottom-0 bg-[#432010] text-white text-sm px-6 py-2 rounded-full">
				Buy Now
			</button>
		</div>
	);
};

export default ProductCard;
