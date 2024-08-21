import { About } from "@/components/ui/about";
import { Banner } from "@/components/ui/banner";
import { Contact } from "@/components/ui/contact";
import { Header } from "@/components/ui/header";
import { Proyects } from "@/components/ui/proyects";
import { Areas } from "@/components/ui/area";
import { Tecnologies } from "@/components/ui/tecnologies";

export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<About />
			<Proyects />
			<Areas />
			<Tecnologies />
			<Contact />
		</>
	);
}
