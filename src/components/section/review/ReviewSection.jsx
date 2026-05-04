import Heading from "../../common/Heading";
import CastomersReview from "./reviewComponent/CastomersReview";

const ReviewSection = () => {
	return <div className="h-screen py-20 bg-[#e2c8ae7d]">
		<Heading title="from our customers" />
		<CastomersReview />
	</div>;
};

export default ReviewSection;
