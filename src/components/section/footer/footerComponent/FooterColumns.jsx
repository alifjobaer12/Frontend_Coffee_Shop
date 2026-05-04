import { Mail, MapPin, Phone } from "lucide-react";
import FooterAbout from "./FooterAbout";
import FooterHours from "./FooterHours";
import FooterLinks from "./FooterLinks";

const FooterColumns = () => {
	const links = ["link1", "link1", "link1", "link1"];

	return (
		<div className="bg-[#2b1208] px-6 py-12 md:px-16 lg:px-20">
			<div className="grid gap-10 md:grid-cols-3">
				<FooterAbout MapPin={MapPin} Phone={Phone} Mail={Mail} />
				<FooterLinks links={links} />
				<FooterHours />
			</div>
		</div>
	);
};

export default FooterColumns;
