import { Plus } from "lucide-react";

const Items = () => {
	return (
		<div className="flex gap-10 pt-10">
			<div className="flex flex-col items-center justify-center">
				<h1 className="flex text-4xl font-[Playfair] font-semibold items-center text-[#6B3E26] ">
					1K{" "}
					<span>
						{" "}
						<Plus size={30} />{" "}
					</span>
				</h1>
				<p className="font-[Poppins] text-[#c89b6d] font-light  ">
					Reviewes
				</p>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="flex text-4xl font-[Playfair] font-semibold items-center text-[#6B3E26] ">
					3K{" "}
					<span>
						{" "}
						<Plus size={30} />{" "}
					</span>
				</h1>
				<p className="font-[Poppins] text-[#c89b6d] font-light  ">
					Best Sell
				</p>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="flex text-4xl font-[Playfair] font-semibold items-center text-[#6B3E26] ">
					150K{" "}
					<span>
						{" "}
						<Plus size={30} />{" "}
					</span>
				</h1>
				<p className="font-[Poppins] text-[#c89b6d] font-light  ">
					Menu
				</p>
			</div>
		</div>
	);
};

export default Items;
