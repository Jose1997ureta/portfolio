import Image from "next/image";
import { Title } from "../title";
import { MdWeb } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";

export const Areas = () => {
	return (
		<section className=" bg-third2" id="areas">
			<div className="2xl:w-[80%] 3xl:w-[70%] mx-auto px-5 md:px-[40px] 2xl:px-[60px] lg:py-16 p-6">
				<div className="flex justify-center mb-5">
					<Title title="Areas" position="center" />
				</div>

				<div className="flex justify-center">
					<div className="flex flex-col md:flex-row md:items-center gap-4 ">
						<div className="w-full lg:w-[420px] rounded-xl relative">
							<Image
								src={"/fondo-card.jpg"}
								alt=""
								width={420}
								height={230}
								className="object-cover h-[230px] rounded-xl"
							/>

							<div className="absolute top-0 left-0 w-full h-full bg-sky-700/85 rounded-xl p-[20px]">
								<div className="mb-1">
									<MdWeb className="fill-white w-9 h-9" />
								</div>
								<p className="text-white text-2xl font-medium  mb-3">
									Frontend Developer
								</p>

								<p className="text-sm text-white">
									Como desarrollador front-end, creo interfaces web escalables y
									optimizadas utilizando tecnologías avanzadas. Implemento
									métodos flexibles para mejorar la experiencia del usuario y
									asegurar el éxito de cada proyecto.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-[420px] rounded-xl relative">
							<Image
								src={"/fondo-card.jpg"}
								alt=""
								width={420}
								height={230}
								className="object-cover h-[230px] rounded-xl"
							/>

							<div className="absolute top-0 left-0 w-full h-full bg-yellow-600/85 rounded-xl p-[20px]">
								<div className="mb-1">
									<CiMobile1 className="fill-white w-9 h-9" />
								</div>
								<p className="text-white text-2xl font-medium  mb-3">
									Mobile Developer
								</p>

								<p className="text-sm text-white">
									Me especializo en el desarrollo de aplicaciones móviles
									eficientes y personalizadas que utilizan las últimas
									tecnologías para crear una experiencia de usuario perfecta.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
