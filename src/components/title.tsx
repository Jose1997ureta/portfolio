import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
	title: string;
	position?: "center" | "right";
}

export const Title = ({ title, position = "right" }: Props) => {
	const positionC = clsx({
		"-right-5 -left-5": position === "center",
		"-right-5 left-0": position === "right",
	});

	return (
		<div className="relative w-fit mb-[26px]">
			<h2 className="text-3xl lg:text-4xl font-medium">{title}</h2>

			<div
				className={twMerge("absolute h-1 bg-primary -bottom-2 ", positionC)}
			/>
		</div>
	);
};
