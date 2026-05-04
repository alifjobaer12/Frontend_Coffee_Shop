import { ArrowRight } from "lucide-react";

const ServiceCard = (props) => {
	return (
		<div className="w-70 p-6 rounded-3xl bg-white flex flex-col items-center overflow-hidden shadow-[0px_15px_40px_rgba(0,0,0,0.50)]">
			<div className="overflow-hidden h-18 w-18 flex items-center justify-center bg-[#e2c8ae7d] rounded-full">
				<img className=" object-cover" src={props.img} alt="services" />
			</div>
			<h1 className="pt-2 text-2xl font-Arile font-medium text-[#6B3E26]">
				{props.title}
			</h1>
			<p className="py-4 px-2 text-center font-normal font-Arile text-[#6B3E26] leading-tight">
				{props.desc}
			</p>
			<button className="flex pt-2 gap-1 text-[16px] items-center justify-center text-[#C89B6D]">
				Learn More <ArrowRight size={20} />{" "}
			</button>
		</div>
	);
};

export default ServiceCard;
