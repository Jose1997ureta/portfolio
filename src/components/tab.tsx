import { activeTabType } from "./ui/proyects";

interface Props {
	active: activeTabType;
	onChange: (value: activeTabType) => void;
	data: object[];
}

export const Tabs = ({ active, onChange, data }: Props) => {
	return (
		<div className="flex items-center gap-x-2 ">
			{data.map((el: any) => (
				<div
					key={el.id}
					className="p-3 cursor-pointer"
					onClick={() => onChange(el.key)}
				>
					<p
						className={`text-base ${
							active === el.key ? "font-medium text-primary" : ""
						}`}
					>
						{el.name}
					</p>
				</div>
			))}
		</div>
	);
};
