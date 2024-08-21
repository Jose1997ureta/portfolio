interface Props {
	onClick: () => void;
	icon?: React.ReactNode;
}

export const ButtonIcon = ({ onClick, icon }: Props) => {
	return (
		<button
			className="border-2 border-primary rounded-md p-2  outline-none w-fit flex items-center justify-center gap-x-2"
			onClick={() => onClick()}
		>
			{icon}
		</button>
	);
};
