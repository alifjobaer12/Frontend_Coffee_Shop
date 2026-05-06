import Heading from "../../common/Heading";
import ServiceCard from "./serviceComponent/ServiceCard";
import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import coffeeBeans from "../../../assets/coffee_beans.png";

const ServiceSection = () => {
	const headings = {
		title: "Our Delicious Services",
		desc: "we offer a carefully curated collection that showcases the distinct characteristics of beans sourced from specific regions.",
	};

	const serviceData = [
		{
			img: service1,
			title: "Coffee Types",
			desc: "We offer a tantalizing variety of coffee types to cater to your unique preferences.",
		},
		{
			img: service2,
			title: "Different Beans",
			desc: "We take pride in sourcing and roasting the finest quality beans from around the world.",
		},
		{
			img: service3,
			title: "Cold Coffee",
			desc: "We offer a variety of cold coffee options to satisfy your cravings.",
		},
	];

	return (
		<>
			<div className="pt-8 sm:pt-16 lg:pt-38 px-4 sm:px-8 lg:px-20 flex flex-col items-center">
				<Heading title={headings.title} desc={headings.desc} />
				<div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-22 py-8 sm:py-12 lg:py-15 w-full justify-center">
					{serviceData.map((service, index) => (
						<ServiceCard
							key={index}
							img={service.img}
							title={service.title}
							desc={service.desc}
						/>
					))}
				</div>
			</div>

			<div className="w-full h-auto overflow-hidden">
				<img
					src={coffeeBeans}
					alt="Coffee beans separator"
					className="w-full h-auto"
				/>
			</div>
		</>
	);
};

export default ServiceSection;
