export const dataLinkHeader = [
	{
		id: 1,
		name: "Inicio",
		href: "#inicio",
	},
	{
		id: 2,
		name: "Sobre mí",
		href: "#sobremi",
	},
	{
		id: 3,
		name: "Proyectos",
		href: "#proyectos",
	},
	{
		id: 4,
		name: "Areas",
		href: "#areas",
	},
	{
		id: 5,
		name: "Tecnologías",
		href: "#tecnologias",
	},
	{
		id: 6,
		name: "Contacto",
		href: "#contacto",
	},
];

export const DataTabs = [
	{
		id: 1,
		key: "web",
		name: "Web",
	},
	{
		id: 2,
		key: "mobile",
		name: "Mobile",
	},
	{
		id: 3,
		key: "backend",
		name: "Backend",
	},
];

export const DataProyect = [
	{
		id: 1,
		img: "/movie.png",
		urlCode: "https://github.com/Jose1997ureta/movie-next",
		urlPreview: "https://movie-next-bice.vercel.app/",
		area: "web",
		tecnologies: ["NextJS", "Tailwind", "TypeScript"],
		title: "Proyecto de Películas",
	},
	{
		id: 2,
		img: "/ju-ui.png",
		urlCode: "https://github.com/Jose1997ureta/ju-ui-documentacion",
		urlPreview: "https://ju-ui-documentacion.vercel.app/",
		area: "web",
		tecnologies: ["React", "Tailwind", "TypeScript", "Storybook"],
		title: "Libreria de Componentes para React/NextJS",
	},
	{
		id: 3,
		img: "/movie.png",
		urlCode: "https://github.com/Jose1997ureta/movie-prisma",
		urlPreview: "https://movie-next-bice.vercel.app/",
		area: "backend",
		tecnologies: ["NodeJS", "Prisma", "TypeScript", "ExpressJS", "MYSQL"],
		title: "Api para el Proyecto de Películas",
	},
];
