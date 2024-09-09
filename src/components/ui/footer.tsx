import Link from "next/link";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
	return (
		<div className="h-[60px] px-5 py-5 lg:px-10 border-t border-neutral-100">
			<div className="flex justify-center items-center gap-x-2">
				<p className="text-text text-xs">Jose Ureta - </p>
				<Link
					href={"https://www.linkedin.com/in/jos%C3%A9-antonio-ureta-chipana/"}
					target="_blank"
				>
					<FaLinkedin className="w-4 h-4 fill-text" />
				</Link>
				<Link href={"https://github.com/Jose1997ureta"} target="_blank">
					<FaGithub className="w-4 h-4 fill-text" />
				</Link>
			</div>
		</div>
	);
};
