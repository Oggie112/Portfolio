import { useState } from "react";
import type { Route } from "./+types/home";
import { BackdropAnimator } from "../components/BackdropAnimator";
import { Nav } from "../components/layout/Nav";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { useSectionBackground } from "../hooks/useSectionBackground";
import type { Project } from "../content/projects";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "David Ogden — Developer" },
		{
			name: "description",
			content: "Full-stack developer building thoughtful web applications.",
		},
	];
}

export default function Home() {
	const currentSection = useSectionBackground();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<>
			<BackdropAnimator currentSection={currentSection} />
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
