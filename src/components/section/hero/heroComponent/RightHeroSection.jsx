import heroCoffeeCup from "../../../../assets/hero_coffee_cup.png";

const RightHeroSection = () => {
	return (
		<div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center py-8 lg:py-0 min-h-80 lg:min-h-auto">
			<div className="relative w-full h-full flex items-center justify-center">
				<img
					className="absolute z-1 scale-100 sm:scale-125 lg:scale-150 w-auto h-auto max-w-xs sm:max-w-sm lg:max-w-none"
					src={heroCoffeeCup}
					alt="Coffee cup hero illustration"
				/>
			</div>
			<h1 className="hidden lg:block text-6xl sm:text-8xl lg:text-[220px] text-[#e2c8ae7d] font-[Playfair] pl-0 lg:pl-50 pt-0 lg:pt-20 font-medium leading-40 absolute">
				coffee <br /> coffee <br /> coffee
			</h1>
		</div>
	);
};

export default RightHeroSection;
