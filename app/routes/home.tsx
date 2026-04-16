import { useState } from "react";
import type { Route } from "./+types/home";
import { Nav } from "../components/layout/Nav";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { useSectionBackground } from "../hooks/useSectionBackground";
import type { Project } from "../content/projects";

const SITE_URL = "https://david-ogden.vercel.app";
const OG_IMAGE = `${SITE_URL}/images/headshot.jpg`;

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "David Ogden — Developer" },
		{ name: "description", content: "Full-stack developer building thoughtful web applications." },

		// Open Graph
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: SITE_URL },
		{ property: "og:title", content: "David Ogden — Developer" },
		{ property: "og:description", content: "Full-stack developer building thoughtful web applications." },
		{ property: "og:image", content: OG_IMAGE },

		// Twitter
		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:title", content: "David Ogden — Developer" },
		{ name: "twitter:description", content: "Full-stack developer building thoughtful web applications." },
		{ name: "twitter:image", content: OG_IMAGE },
	];
}

export default function Home() {
	const currentSection = useSectionBackground();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<>
			<Nav currentSection={currentSection} onNavigate={() => setSelectedProject(null)} />
			<Hero />
			<About />
			<Projects
				selectedProject={selectedProject}
				onOpen={setSelectedProject}
				onClose={() => setSelectedProject(null)}
			/>
			<Skills />
			<Contact />
		</>
	);
}
