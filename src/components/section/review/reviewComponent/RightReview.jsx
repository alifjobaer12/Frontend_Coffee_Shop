const RightReview = (props) => {
	const { customer } = props;

	return (
		<div className="w-1/3 flex flex-col justify-center items-center relative">
			<div className="relative">
				{/* Customer Image */}
				<img
					src={customer?.image}
					alt={customer?.name}
					className="w-80 h-96 object-cover rounded-xl shadow-lg"
				/>
			</div>
		</div>
	);
};

export default RightReview;
