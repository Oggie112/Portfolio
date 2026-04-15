import type { Route } from "./+types/home";
import { BackdropAnimator } from "../components/BackdropAnimator";
import { Nav } from "../components/layout/Nav";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { handleContactForm } from "../lib/actions";
import { useSectionBackground } from "../hooks/useSectionBackground";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "David Ogden — Developer" },
		{
			name: "description",
			content: "Full-stack developer building thoughtful web applications.",
		},
	];
}

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	return handleContactForm(formData);
}

export default function Home() {
	const currentSection = useSectionBackground();

	return (
		<>
			<BackdropAnimator currentSection={currentSection} />
			<Nav currentSection={currentSection} />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</>
	);
}
