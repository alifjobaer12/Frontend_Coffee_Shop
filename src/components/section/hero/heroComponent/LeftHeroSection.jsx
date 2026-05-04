import { ArrowUpRight } from "lucide-react";
import Items from "./Items";

const LeftHeroSection = () => {
	return (
		<div className="w-[50%] px-10">
			<div className="flex flex-col items-start gap-3  pt-[28%]">
				<h1 className="font-[Playfair] text-7xl text-[#6B3E26] font-bold">
					Discover The Art <br />
					of Perfect Coffee
				</h1>
				<p className="font-Arile text-lg text-[#C89B6D] font-normal pb-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolores natus aut voluptatum cumque dolorum vitae ad! Culpa
					nihil reiciendis porro ipsam, beatae totam blanditiis, cum
					recusandae, voluptatum in modi hic!
				</p>
				<button className="flex items-center justify-between gap-4 bg-[#6B3E26] text-white pl-6 pr-2 py-1.5 rounded-full">
					Order Now{" "}
					<span className="h-8 w-8 rounded-full bg-white text-[#2B2B2B] flex items-center justify-center ">
						<ArrowUpRight />
					</span>{" "}
				</button>
			</div>
			<Items />
		</div>
	);
};

export default LeftHeroSection;
