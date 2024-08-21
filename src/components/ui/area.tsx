import Image from "next/image";
import { Title } from "../title";
import { MdWeb } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";

export const Areas = () => {
	return (
		<section
			className="px-5 md:px-[40px] xl:px-[100px] lg:py-16 p-6  bg-third2"
			id="areas"
		>
			<div className="flex justify-center mb-5">
				<Title title="Areas" position="center" />
			</div>

			<div className="flex justify-center">
				<div className="flex flex-col lg:flex-row lg:items-center gap-4 ">
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
								Como desarrollador front-end, construyo Utilice interfaces web
								tecnológicamente escalables y optimizadas. Métodos avanzados y
								flexibles para mejorar la experiencia del usuario usuarios y
								garantizar el éxito del proyecto.
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
								eficientes y personalizadas que utilizan las últimas tecnologías
								para crear una experiencia de usuario perfecta.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
