const Heading = (props) => {
	return (
		<div className="items-center flex flex-col justify-center w-full px-4">
			<h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase font-Arial font-medium text-[#6B3E26] text-center">
				{props.title}
			</h1>
			<div className="flex items-center justify-center gap-3 sm:gap-5 my-3 sm:my-4">
				<div className="h-0.5 w-16 sm:w-25 bg-[#db832a8f]"></div>
				<div className="text-yellow-700 text-sm sm:text-lg">❧</div>
				<div className="h-0.5 w-16 sm:w-25 bg-[#db832a8f]"></div>
			</div>
			<p className="max-w-xs sm:max-w-md lg:max-w-160 text-[#c89b6d] font-Arile text-center font-normal text-xs sm:text-sm lg:text-[15px] leading-relaxed">
				{props.desc}
			</p>
		</div>
	);
};

export default Heading;
