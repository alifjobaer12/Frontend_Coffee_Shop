const RightReview = (props) => {
	const { customer } = props;

	return (
		<div className="w-full lg:w-1/3 flex flex-col justify-center items-center relative">
			<div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none">
				{/* Customer Image */}
				<img
					src={customer?.image}
					alt={customer?.name}
					className="w-full h-auto sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
				/>
			</div>
		</div>
	);
};

export default RightReview;
