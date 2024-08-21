"use client";

import Image from "next/image";
import { Title } from "../title";
import { Button } from "../button";

import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ButtonIcon } from "../button-icon";
import { useRouter } from "next/navigation";

export const About = () => {
	const router = useRouter();
	const handleOpenTab = (href: string) => {
		window.open(href, "_blank");
	};

	return (
		<section
			className="px-5 md:px-[40px] xl:px-[100px] lg:py-16 pt-6 pb-12 bg-third2 flex flex-col lg:flex-row items-start md:gap-x-[60px] xl:gap-x-[132px]"
			id="sobremi"
		>
			<div className="relative before:content-[''] before:absolute before:-right-[20px] before:-top-[20px] before:bg-primary before:w-[300px] before:h-[340px] before:rounded-lg order-2 lg:order-1">
				<Image
					src={"/jose.jpg"}
					alt=""
					className="object-cover w-[300px] h-[300px] rounded-lg relative"
					width={300}
					height={300}
				/>
			</div>

			<div className="order-1 lg:order-2">
				<Title title="Sobre mí" />

				<p className="lg:w-[550px] text-text">
					Soy Frontend Web Developer y cuento con mas de 4 años de experiencia
					en el rubro del desarrollo de web y móvil. Actualmente estoy
					trabajando como React Developer para soluciones multiplataformas. Me
					considero ser una persona autodidacta, enfocado a nuevos retos y con
					ganas de superación.
				</p>

				<div className="mt-6 lg:mt-[40px] flex items-center gap-x-4 mb-12 lg:mb-0 ml-auto mr-auto lg:ml-0 lg:mr-0">
					<Button
						text="Contactar"
						onClick={() => router.push("#contacto")}
						icon={<MdEmail className="w-5 h-5" />}
					/>
					<div className="flex items-center gap-x-2">
						<ButtonIcon
							icon={<FaLinkedinIn className="fill-primary" />}
							onClick={() =>
								handleOpenTab(
									"https://www.linkedin.com/in/jos%C3%A9-antonio-ureta-chipana/"
								)
							}
						/>
						<ButtonIcon
							icon={<FaGithub className="fill-primary" />}
							onClick={() => handleOpenTab("https://github.com/Jose1997ureta")}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
