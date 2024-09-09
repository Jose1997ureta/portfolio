"use client";

import { Button } from "../button";
import { MdFileDownload } from "react-icons/md";

export const Banner = () => {
	const handleDonwload = async () => {
		const fileName = "/JOSE ANTONO URETA CHIPANA.pdf";
		try {
			const result = await fetch(fileName);
			const response = await result.blob();

			const link = document.createElement("a");
			link.href = URL.createObjectURL(response);
			link.download = fileName;

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.log("No se ha podido descargar el archivo");
		}
	};

	return (
		<div className="w-full h-[350px] md:h-[400px] xl:h-[500px] bg-third1 ">
			<div className="2xl:w-[80%] 3xl:w-[70%] mx-auto px-5 md:px-[40px] 2xl:px-[60px] lg:py-16 p-6  flex flex-col justify-center mt-[60px] h-full">
				<div className="mb-[56px]">
					<h3 className="text-text font-medium text-lg xl:text-2xl md:text-xl mb-[5px]">
						Hola, mi nombre es
					</h3>
					<h1 className="font-medium text-[40px]  md:text-6xl xl:text-7xl  mb-[5px]">
						Jose Antonio
					</h1>
					<h2 className="text-text font-medium text-2xl md:text-[30px] xl:text-[40px] lg:w-[430px]  md:leading-[44px]">
						FrontEnd Developer & Mobile Developer
					</h2>
				</div>

				<Button
					text="Descargar CV"
					onClick={handleDonwload}
					icon={<MdFileDownload className="w-6 h-6" />}
				/>
			</div>
		</div>
	);
};
