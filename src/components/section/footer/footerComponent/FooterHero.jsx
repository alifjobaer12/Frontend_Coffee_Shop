import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../../common/Logo";
import footerBg from "../../../../assets/footer.jpg";

const FooterHero = () => {
	const socialIcons = [FaFacebookF, FaTwitter, FaYoutube, FaInstagram];

	return (
		<div
			className="relative min-h-108 bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${footerBg})` }}
		>
			<div className="absolute inset-0 bg-[#120805]/70" />

			<div className="relative z-10 flex min-h-108 flex-col items-center justify-center px-6 py-14 text-center">
				<Logo />
				<p className="mt-5 max-w-2xl text-sm tracking-wide text-white/85 md:text-base">
					Sip, savor, and be captivated by Coffee Cup mastery.
				</p>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
					{socialIcons.map((Icon, index) => (
						<button
							key={index}
							className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white transition hover:bg-white hover:text-[#2d140b]"
						>
							<Icon size={18} />
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default FooterHero;
