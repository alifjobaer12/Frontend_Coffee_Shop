const Heading = (props) => {
	return (
		<div className="items-center flex flex-col justify-center">
			<h1 className=" text-4xl uppercase font-Arial font-medium text-[#6B3E26]">
				{props.title}
			</h1>
			<div className="flex items-center justify-center gap-5">
				<div className="h-0.5 w-25 bg-[#db832a8f]"></div>
				<div className="text-yellow-700 text-lg">❧</div>
				<div className="h-0.5 w-25 bg-[#db832a8f]"></div>
			</div>
			<p className="max-w-160 pt-1 text-[#c89b6d] font-Arile text-center font-normal text-[15px]">
				{props.desc}
			</p>
		</div>
	);
};

export default Heading;
