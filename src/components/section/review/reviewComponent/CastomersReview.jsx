import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeftReview from "./LeftReview";
import RightReview from "./RightReview";

const CastomersReview = () => {
	const reviews = [
		{
			id: 1,
			name: "Samantha R",
			image: "/src/assets/customerReview1.jpg",
			text: "I've tried coffee from various places, but Coffee Cup stands out from the rest. The quality and consistency of their blends are unmatched. Each cup is a flavor journey that takes my taste buds to new heights. Their commitment to sourcing the finest beans and their meticulous roasting process truly shines through in every sip.",
		},
		{
			id: 2,
			name: "John D",
			image: "/src/assets/customerReview2.jpg",
			text: "Best coffee I've had in years! The aroma, the taste, everything is perfect. The baristas are knowledgeable and friendly. I come here every morning and never regret it. Highly recommended!",
		},
		{
			id: 3,
			name: "Emma L",
			image: "/src/assets/customerReview3.jpg",
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
		<div className="flex flex-col">
			<div className="flex px-40">
				<LeftReview review={currentReview} />
				<RightReview customer={currentReview} />
			</div>
			{/* Navigation Buttons */}
			<div className="flex justify-start pl-20 mt-8 gap-4">
				<button
					onClick={prevReview}
					className="border-2 border-[#c4a574] p-3 rounded-lg hover:bg-[#c4a574] hover:text-white transition"
				>
					<ChevronLeft size={20} />
				</button>
				<button
					onClick={nextReview}
					className="border-2 border-[#c4a574] p-3 rounded-lg hover:bg-[#c4a574] hover:text-white transition"
				>
					<ChevronRight size={20} />
				</button>
			</div>
		</div>
	);
};

export default CastomersReview;
