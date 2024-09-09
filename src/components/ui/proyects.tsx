"use client";

import { useState } from "react";
import { Tabs } from "../tab";
import { Title } from "../title";
import Image from "next/image";
import { Button } from "../button";

import { IoCode, IoEyeSharp } from "react-icons/io5";
import { DataProyect, DataTabs } from "@/constants/data";

export type activeTabType = "web" | "mobile" | "backend";

export const Proyects = () => {
	const [active, setActive] = useState<activeTabType>("web");

	const handleChangeTab = (value: activeTabType) => {
		setActive(value);
	};

	const handleOpenTab = (href: string) => {
		window.open(href, "_blank");
	};

	return (
		<section className="bg-third1" id="proyectos">
			<div className="2xl:w-[80%] 3xl:w-[70%] mx-auto px-5 md:px-[40px] 2xl:px-[60px] lg:py-16 p-6">
				<Title title="Proyectos" />

				<p className="text-sm text-text mb-[26px] ">
					Estos proyectos han sido desarrollados para fortalecer y aplicar los
					conocimientos adquiridos a lo largo de mi carrera profesional. En esta
					sección, encontrarás una variedad de trabajos que abarcan tanto el
					desarrollo web como el móvil, utilizando diferentes lenguajes de
					programación.
				</p>

				<Tabs
					active={active}
					onChange={(value: activeTabType) => handleChangeTab(value)}
					data={DataTabs}
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 mt-5">
					{DataProyect.filter((el) => el.area === active).map((el) => (
						<div key={el.id}>
							<div className="relative group overflow-hidden">
								<Image
									height={228}
									width={228}
									src={el.img}
									alt=""
									className="w-full h-[228px] object-cover"
								/>

								<div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-black/70 transition-all duration-500 ease-in-out transform translate-y-[100%] group-hover:translate-y-0">
									<div className="flex flex-col items-center gap-y-4">
										<Button
											text="Codigo Fuente"
											onClick={() => handleOpenTab(el.urlCode)}
											size="sm"
											icon={<IoCode className="w-5 h-5" />}
										/>

										{active === "web" ? (
											<Button
												text="Previsualizar"
												onClick={() => handleOpenTab(el.urlPreview)}
												size="sm"
												type="outline"
												icon={<IoEyeSharp className="w-5 h-5" />}
											/>
										) : null}
									</div>
								</div>
							</div>

							<p className="text-sm font-medium mt-2">{el.title}</p>

							{el.tecnologies.length > 0 ? (
								<div className="flex items-center flex-wrap gap-1 mt-2">
									{el.tecnologies.map((t) => (
										<div
											key={t}
											className="py-0.5 px-2 bg-slate-300 rounded-full"
										>
											<p className="text-xs">{t}</p>
										</div>
									))}
								</div>
							) : null}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
