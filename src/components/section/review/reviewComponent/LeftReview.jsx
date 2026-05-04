import { Quote } from "lucide-react";

const LeftReview = (props) => {
	const { review } = props;
	// const { customer } = props;

	return (
		<div className="w-2/3 h-96 flex flex-col justify-between items-center">
			<div className="w-full flex-1 pt-20">
				<p className="italic text-2xl text-[#8b6a47] leading-relaxed">
					<Quote
						className="inline-block mr-3 align-top text-6xl text-[#c4a574] rotate-180"
						size={30}
					/>
					<span>{review?.text}</span>
					<Quote
						className="inline-block ml-3 align-bottom text-6xl text-[#c4a574]"
						size={30}
					/>
				</p>
			</div>
			<div className="w-full font-['Great_Vibes'] text-[#8b6a47] font-normal text-5xl pt-3 text-end mt-auto">
				- {review?.name}
			</div>
		</div>
	);
};

export default LeftReview;
