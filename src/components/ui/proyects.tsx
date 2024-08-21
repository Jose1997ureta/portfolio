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
		<section
			className="px-5 md:px-[40px] xl:px-[100px] lg:py-16 p-6  bg-third1"
			id="proyectos"
		>
			<Title title="Proyectos" />

			<Tabs
				active={active}
				onChange={(value: activeTabType) => handleChangeTab(value)}
				data={DataTabs}
			/>

			{active === "web" ? (
				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 mt-5">
					{DataProyect.map((el) => (
						<div className="relative group overflow-hidden" key={el.id}>
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
									<Button
										text="Previsualizar"
										onClick={() => handleOpenTab(el.urlPreview)}
										size="sm"
										type="outline"
										icon={<IoEyeSharp className="w-5 h-5" />}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			) : null}
		</section>
	);
};
