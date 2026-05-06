import { Plus } from "lucide-react";

const Items = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-6 sm:pt-10 w-full">
			<div className="flex flex-col items-center justify-center flex-1">
				<h1 className="flex text-2xl sm:text-3xl lg:text-4xl font-[Playfair] font-semibold items-center text-[#6B3E26]">
					1K{" "}
					<span>
						<Plus size={20} className="sm:w-8 sm:h-8" />{" "}
					</span>
				</h1>
				<p className="font-[Poppins] text-[#c89b6d] font-light text-sm sm:text-base">
					Reviewes
				</p>
			</div>
			<div className="flex flex-col items-center flex-1">
				<h1 className="flex text-2xl sm:text-3xl lg:text-4xl font-[Playfair] font-semibold items-center text-[#6B3E26]">
					3K{" "}
					<span>
						<Plus size={20} className="sm:w-8 sm:h-8" />{" "}
					</span>
				</h1>
				<p className="font-[Poppins] text-[#c89b6d] font-light text-sm sm:text-base">
					Best Sell
				</p>
			</div>
			<div className="flex flex-col items-center flex-1">
				<h1 className="flex text-2xl sm:text-3xl lg:text-4xl font-[Playfair] font-semibold items-center text-[#6B3E26]">
					150K{" "}
					<span>
						<Plus size={20} className="sm:w-8 sm:h-8" />{" "}
					</span>
				</h1>
				<p className="font-[Poppins] text-[#c89b6d] font-light text-sm sm:text-base">
					Menu
				</p>
			</div>
		</div>
	);
};

export default Items;
