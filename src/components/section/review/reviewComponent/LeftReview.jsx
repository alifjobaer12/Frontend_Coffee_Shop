import { Quote } from "lucide-react";

const LeftReview = (props) => {
	const { review } = props;

	return (
		<div className="w-full lg:w-2/3 flex flex-col justify-between items-center py-6 lg:py-0 lg:pt-20 h-full">
			<div className="w-full flex-1">
				<p className="italic text-[10px] sm:text-lg lg:text-2xl text-[#8b6a47] leading-relaxed text-center lg:text-left min-h-24 sm:min-h-40 lg:min-h-64">
					<Quote
						className="hidden sm:inline-block mr-2 sm:mr-3 align-top text-3xl sm:text-6xl text-[#c4a574] rotate-180"
						size={20}
					/>
					<span>{review?.text}</span>
					<Quote
						className="hidden sm:inline-block ml-2 sm:ml-3 align-bottom text-3xl sm:text-6xl text-[#c4a574]"
						size={20}
					/>
				</p>
			</div>
			<div className="w-full font-['Great_Vibes'] text-[#8b6a47] font-normal text-2xl sm:text-4xl lg:text-5xl pt-4 lg:pt-3 text-center lg:text-end mt-4 lg:mt-auto">
				- {review?.name}
			</div>
		</div>
	);
};

export default LeftReview;
