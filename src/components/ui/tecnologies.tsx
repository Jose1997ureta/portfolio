import {
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaNodeJs,
	FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiStorybook, SiExpress, SiPrisma } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

import { Title } from "../title";
import { BiLogoPostgresql } from "react-icons/bi";

export const Tecnologies = () => {
	return (
		<section
			className="px-5 md:px-[40px] xl:px-[100px] lg:py-16 p-6 bg-third1"
			id="tecnologias"
		>
			<div className="flex justify-center mb-5">
				<Title title="Tecnologías" position="center" />
			</div>

			<div className="grid grid-cols-3  md:grid-cols-6 lg:grid-cols-10 gap-x-4 gap-y-10">
				{/* BASICO */}
				<div className="flex flex-col items-center">
					<FaHtml5 className="h-9 w-9" />
					<p className="text-base mt-1">HTML</p>
				</div>
				<div className="flex flex-col items-center">
					<FaCss3Alt className="h-9 w-9 " />
					<p className="text-base mt-1">CSS</p>
				</div>
				<div className="flex flex-col items-center">
					<IoLogoJavascript className="h-9 w-9 " />
					<p className="text-base mt-1">JavaScript</p>
				</div>

				{/* FRONTEND */}
				<div className="flex flex-col items-center">
					<SiTypescript className="h-9 w-9 " />
					<p className="text-base mt-1">TypeScript</p>
				</div>

				<div className="flex flex-col items-center">
					<FaReact className="h-9 w-9 " />
					<p className="text-base mt-1">React</p>
				</div>
				<div className="flex flex-col items-center">
					<RiNextjsFill className="h-9 w-9 " />
					<p className="text-base mt-1">NextJS</p>
				</div>
				<div className="flex flex-col items-center">
					<FaReact className="h-9 w-9 " />
					<p className="text-base mt-1">React Native</p>
				</div>

				<div className="flex flex-col items-center">
					<RiTailwindCssFill className="h-9 w-9 " />
					<p className="text-base mt-1">Tailwind</p>
				</div>

				<div className="flex flex-col items-center">
					<SiStorybook className="h-9 w-9 " />
					<p className="text-base mt-1">Storybook</p>
				</div>

				{/* BACKEND */}
				<div className="flex flex-col items-center">
					<FaNodeJs className="h-9 w-9 " />
					<p className="text-base mt-1">NodeJS</p>
				</div>
				<div className="flex flex-col items-center">
					<SiExpress className="h-9 w-9 " />
					<p className="text-base mt-1">ExpressJS</p>
				</div>

				<div className="flex flex-col items-center">
					<SiPrisma className="h-9 w-9 " />
					<p className="text-base mt-1">Prisma</p>
				</div>

				{/* SQL */}

				<div className="flex flex-col items-center">
					<DiMysql className="h-9 w-9 " />
					<p className="text-base mt-1">MYSQL</p>
				</div>
				<div className="flex flex-col items-center">
					<BiLogoPostgresql className="h-9 w-9 " />
					<p className="text-base mt-1">Postgres SQL</p>
				</div>

				<div className="flex flex-col items-center">
					<FaGithub className="h-9 w-9 " />
					<p className="text-base mt-1">Git</p>
				</div>
			</div>
		</section>
	);
};
