import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeftReview from "./LeftReview";
import RightReview from "./RightReview";
import customerReview1 from "../../../../assets/customerReview1.jpg";
import customerReview2 from "../../../../assets/customerReview2.jpg";
import customerReview3 from "../../../../assets/customerReview3.jpg";

const CastomersReview = () => {
	const reviews = [
		{
			id: 1,
			name: "Samantha R",
			image: customerReview1,
			text: "I've tried coffee from various places, but Coffee Cup stands out from the rest. The quality and consistency of their blends are unmatched. Each cup is a flavor journey that takes my taste buds to new heights. Their commitment to sourcing the finest beans and their meticulous roasting process truly shines through in every sip.",
		},
		{
			id: 2,
			name: "John D",
			image: customerReview2,
			text: "Best coffee I've had in years! The aroma, the taste, everything is perfect. The baristas are knowledgeable and friendly. I come here every morning and never regret it. Highly recommended!",
		},
		{
			id: 3,
			name: "Emma L",
			image: customerReview3,
			text: "The ambiance is wonderful, and the coffee is exceptional. I love how they treat coffee as an art form. Every visit is a delightful experience. This is my favorite coffee shop!",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextReview = () => {
		setCurrentIndex((prev) => (prev + 1) % reviews.length);
	};

	const prevReview = () => {
		setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
	};

	const currentReview = reviews[currentIndex];

	return (
		<div className="flex flex-col w-full px-4 sm:px-8 lg:px-40">
			<div className="flex gap-6 sm:gap-8 lg:gap-10 items-stretch lg:min-h-96">
				<LeftReview review={currentReview} />
				<RightReview customer={currentReview} />
			</div>
			{/* Navigation Buttons */}
			<div className="flex justify-start sm:justify-center lg:justify-start pl-0 sm:pl-0 lg:pl-20 mt-6 sm:mt-8 gap-3 sm:gap-4">
				<button
					onClick={prevReview}
					className="border-2 border-[#c4a574] p-2 sm:p-3 rounded-lg hover:bg-[#c4a574] hover:text-white transition"
				>
					<ChevronLeft size={18} className="sm:w-5 sm:h-5" />
				</button>
				<button
					onClick={nextReview}
					className="border-2 border-[#c4a574] p-2 sm:p-3 rounded-lg hover:bg-[#c4a574] hover:text-white transition"
				>
					<ChevronRight size={18} className="sm:w-5 sm:h-5" />
				</button>
			</div>
		</div>
	);
};

export default CastomersReview;
