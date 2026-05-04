import LeftHeroSection from "./heroComponent/LeftHeroSection";
import RightHeroSection from "./heroComponent/RightHeroSection";

const HeroSection = () => {
	return (
		<div className="flex px-20 ">
			<LeftHeroSection />
			<RightHeroSection />
		</div>
	);
};

export default HeroSection;
