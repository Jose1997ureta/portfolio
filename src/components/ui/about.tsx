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
		<section className=" bg-third2 " id="sobremi">
			<div className="2xl:w-[80%] 3xl:w-[70%] mx-auto px-5 md:px-[40px] 2xl:px-[60px] lg:py-16 p-10 flex flex-col lg:flex-row items-start md:gap-x-[60px] 2xl:gap-x-[80px]">
				<div className="relative before:content-[''] before:absolute before:-right-[20px] before:-top-[20px] before:bg-primary before:w-[300px] before:h-[340px] before:rounded-lg order-2 lg:order-1">
					<Image
						src={"/jose.jpg"}
						alt=""
						className="object-cover w-[300px] h-[300px] rounded-lg relative"
						width={300}
						height={300}
					/>
				</div>

				<div className="order-1 lg:order-2 w-full xl:max-w-[750px] lg:max-w-[600px]">
					<Title title="Sobre mí" />

					<p className="text-text">
						Soy Frontend Developer con más de 5 años de experiencia en el
						desarrollo de aplicaciones web y móviles. Actualmente, trabajo como
						React Developer, creando soluciones multiplataforma de alto
						rendimiento. Mi experiencia abarca desde la arquitectura de software
						hasta la implementación de interfaces intuitivas y eficientes. Como
						autodidacta apasionado, busco constantemente nuevos desafíos y
						oportunidades para perfeccionar mis habilidades y aportar valor a
						cada proyecto. Estoy comprometido con la innovación y la calidad,
						entregando productos que superan expectativas y mejoran la
						experiencia del usuario.
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
								onClick={() =>
									handleOpenTab("https://github.com/Jose1997ureta")
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
