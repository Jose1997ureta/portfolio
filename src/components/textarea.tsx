import { ChangeEvent, FocusEvent } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	placeholder?: string;
	value: string;
	name: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur: (e: FocusEvent<HTMLTextAreaElement>) => void;
	error?: string;
	touched?: boolean;
	className?: string;
}

export const TextArea = ({
	placeholder,
	onChange,
	name,
	value,
	onBlur,
	error,
	touched,
	className,
}: Props) => {
	return (
		<div className={twMerge("w-full", className)}>
			<textarea
				name={name}
				className="outline-none border border-[#E5E5E5] w-full rounded-md px-[14px] py-3 text-text text-sm"
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				placeholder={placeholder}
				rows={3}
			/>

			{touched && error ? (
				<p className="text-red-700 text-xs">* {error}</p>
			) : null}
		</div>
	);
};
