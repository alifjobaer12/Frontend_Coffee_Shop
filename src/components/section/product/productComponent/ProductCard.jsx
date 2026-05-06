const ProductCard = (props) => {
	return (
		<div className="relative flex flex-col items-center pb-4 sm:pb-5 w-full">
			<div className="flex flex-col items-center rounded-2xl bg-[#e2c8ae7d] overflow-hidden w-full">
				<img
					className="h-40 sm:h-60 lg:h-70 w-40 sm:w-60 lg:w-70 object-cover"
					src={props.img}
					alt="product"
				/>
				<div className="flex items-center justify-between w-full px-3 sm:px-5 pt-2 sm:pt-3 pb-5 sm:pb-7 text-base sm:text-lg font-Arile font-medium text-[#6B3E26]">
					<h1 className="text-sm sm:text-base"> {props.title} </h1>
					<h1 className="text-sm sm:text-base"> {props.price} </h1>
				</div>
			</div>
			<button className="absolute bottom-0 bg-[#432010] text-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-[#6B3E26] transition">
				Buy Now
			</button>
		</div>
	);
};

export default ProductCard;
