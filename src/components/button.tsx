import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
	text: string;
	onClick: () => void;
	icon?: React.ReactNode;
	size?: "sm" | "md";
	type?: "solid" | "outline";
	disabled?: boolean;
}

export const Button = ({
	onClick,
	text,
	icon,
	size = "md",
	type = "solid",
	disabled,
}: Props) => {
	const sizeC = clsx({
		"p-[10px]": size === "sm",
		"p-3 px-4": size === "md",
		"text-white bg-primary border-none": type === "solid",
		"text-primary border border-primary": type === "outline",
	});

	return (
		<button
			className={twMerge(
				"rounded-md outline-none w-fit flex items-center justify-between gap-x-2 disabled:bg-yellow-200",
				sizeC
			)}
			onClick={() => onClick()}
			disabled={disabled}
		>
			{text}
			{icon}
		</button>
	);
};
