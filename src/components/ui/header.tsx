"use client";

// import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { dataLinkHeader } from "@/constants/data";
import Link from "next/link";

export const Header = () => {
	const [show, setShow] = useState<boolean>(false);
	const router = useRouter();

	const handleToogle = () => {
		const state = !show;
		let body = document.getElementsByTagName("body")[0];
		if (state) body.classList.add("overflow-hidden");
		else body.classList.remove("overflow-hidden");

		setShow((state) => !state);
	};

	const handleResize = useCallback(() => {
		const width = window.innerWidth;
		let body = document.getElementsByTagName("body")[0];
		if (width >= 1024) {
			body.classList.remove("overflow-hidden");

			setShow(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	const handleNavigate = (href: string) => {
		let body = document.getElementsByTagName("body")[0];
		body.classList.remove("overflow-hidden");

		setShow(false);

		router.push(href);

		// window.scrollBy({
		// 	top: 150,
		// 	behavior: "smooth",
		// });
	};

	return (
		<header className="w-full h-[60px] bg-white px-4 md:px-[40px] xl:px-[100px] py-4 shadow-sm flex items-center justify-between  fixed z-10 top-0">
			<Link href={"/"}>
				<p className="text-primary text-[32px] font-semibold">J.U</p>
			</Link>

			<div className="block lg:hidden cursor-pointer" onClick={handleToogle}>
				<RxHamburgerMenu className="h-7 w-7" />
			</div>

			<nav
				className={twMerge(
					show
						? "fixed top-0 left-0 w-full z-10 bg-white h-full"
						: "hidden lg:block"
				)}
			>
				<div
					className="lg:hidden flex justify-end p-5 cursor-pointer"
					onClick={handleToogle}
				>
					<LiaTimesSolid className="h-8 w-8" />
				</div>
				<ul
					className={twMerge(
						show
							? "flex flex-col p-10 items-center"
							: "flex items-center gap-x-[35px]"
					)}
				>
					{dataLinkHeader.map((el) => (
						<li
							key={el.id}
							onClick={(e) => {
								e.preventDefault();
								handleNavigate(el.href);
							}}
							// href={el.href}
							className={twMerge(
								show ? "text-2xl w-full p-2 flex justify-center" : "",
								"font-medium cursor-pointer"
							)}
						>
							{el.name}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
