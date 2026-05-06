import LeftHeroSection from "./heroComponent/LeftHeroSection";
import RightHeroSection from "./heroComponent/RightHeroSection";

const HeroSection = () => {
	return (
		<div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-20 py-8 lg:py-0">
			<LeftHeroSection />
			<RightHeroSection />
		</div>
	);
};

export default HeroSection;
