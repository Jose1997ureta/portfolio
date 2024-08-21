"use client";

import { MdEmail } from "react-icons/md";
import { ButtonIcon } from "../button-icon";
import { Title } from "../title";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Form } from "./form";

export const Contact = () => {
	return (
		<section
			className="px-5 md:px-[40px] xl:px-[100px] lg:py-16 p-6 bg-third2"
			id="contacto"
		>
			<div className="flex justify-center mb-5">
				<Title title="Contáctame" position="center" />
			</div>

			<div className="flex flex-col lg:flex-row justify-between items-start gap-x-4">
				<div className="w-full mg:w-1/2">
					<p className="text-xl font-medium mb-4">
						Desarrollador de Software: Listo para Unirme a tu Equipo
					</p>

					<p className="text-text">
						Si su empresa busca desarrolladores con experiencia en el desarrollo
						de soluciones personalizadas y capacidad para trabajar en proyectos
						ágiles, me interesaría unirme a su equipo. Con mi experiencia en
						desarrollo de software, puedo contribuir al éxito de tu proyecto
						tecnológico.
					</p>

					<div className="lg:mt-[40px] mt-[20px]  space-y-3">
						<div className="flex items-center gap-x-5">
							<ButtonIcon
								icon={<MdEmail className="fill-primary" />}
								onClick={() => console.log()}
							/>
							<p className="text-text text-sm">jose1997ureta@gmail.com</p>
						</div>
						<div className="flex items-center gap-x-5">
							<ButtonIcon
								icon={<FaLinkedinIn className="fill-primary" />}
								onClick={() => console.log()}
							/>
							<p className="text-text text-sm">
								linkedin/in/josé-antonio-ureta-chipana
							</p>
						</div>
						<div className="flex items-center gap-x-5">
							<ButtonIcon
								icon={<FaInstagram className="fill-primary" />}
								onClick={() => console.log()}
							/>
							<p className="text-text text-sm">@joseureta97</p>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-1/2 flex justify-end mt-[30px] lg:mt-0">
					<Form />
				</div>
			</div>
		</section>
	);
};
