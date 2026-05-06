import { ArrowRight } from "lucide-react";

const ServiceCard = (props) => {
	return (
		<div className="w-full sm:w-64 lg:w-70 p-6 rounded-3xl bg-white flex flex-col items-center overflow-hidden shadow-[0px_15px_40px_rgba(0,0,0,0.50)] hover:shadow-lg transition">
			<div className="overflow-hidden h-16 sm:h-18 w-16 sm:w-18 flex items-center justify-center bg-[#e2c8ae7d] rounded-full flex-shrink-0">
				<img
					className="object-cover w-full h-full"
					src={props.img}
					alt="services"
				/>
			</div>
			<h1 className="pt-3 sm:pt-2 text-lg sm:text-2xl font-Arile font-medium text-[#6B3E26] text-center">
				{props.title}
			</h1>
			<p className="py-3 sm:py-4 px-2 text-center font-normal font-Arile text-xs sm:text-sm text-[#6B3E26] leading-tight">
				{props.desc}
			</p>
			<button className="flex pt-2 gap-1 text-sm sm:text-[16px] items-center justify-center text-[#C89B6D] hover:text-[#6B3E26] transition">
				Learn More <ArrowRight size={18} />{" "}
			</button>
		</div>
	);
};

export default ServiceCard;
