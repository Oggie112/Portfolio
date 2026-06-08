export interface Project {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	tags: string[];
	url?: string;
	repo?: string;
	image?: string;
	featured: boolean;
	year: number;
}

export const projects: Project[] = [
		{
		slug: "snacksby",
		title: "Snacksby",
		tagline: "A meal planning and recipe sharing platform for the whole house.",
		description: "Snacksby is a meal planning and recipe sharing platform designed for households. It allows users to create and share recipes, plan meals for the week, and generate shopping lists based on their meal plans. The project was built with a focus on user experience and collaborative features, making it easy for families or roommates to coordinate their meals together.",
		tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase(PostgeSql)", "Apollo GraphQL", "PWA(Serwist)", "Vercel"],
		url: "https://snacksby.vercel.app",
		repo: "https://github.com/Oggie112/snacksby",
		featured: true,
		year: 2026,
		},
		{
		slug: "c58",
		title: "c58",
		tagline: "A CMS site for a local events company.",
		description:
			"A website for a local events company — dynamic listings, a blog, and a video hero section, all managed through Sanity CMS without touching code. The focus was making content ownership easy for a non-technical client.",
		tags: ["Next.js", "TypeScript", "Sanity CMS", "Vercel", "Jest", "TailwindCSS"],
		url: "https://c58.vercel.app/",
		repo: "https://github.com/Oggie112/C58",
		featured: true,
		year: 2026,
	},
	{
		slug: "alan",
		title: "ALAN",
		tagline: "AI that listens, answers and narrates.",
		description:
			"ALAN is an email-based AI assistant that reads your inbox, understands your requests, and replies with personalised, RAG-powered summaries and narrated insights — no app, no dashboard, just your Gmail. The interesting challenge was exploring semantic chunking and FAISS-based retrieval to make responses genuinely context-aware.",
		tags: ["SvelteKit", "TypeScript", "TailwindCSS", "MongoDB", "Supabase", "OpenAI API", "DALL·E 3", "Langgraph"],
		repo: "https://github.com/fac-31/Pro1020-ALAN",
		featured: false,
		year: 2025,
	},
	{
		slug: "storymaker",
		title: "Storymaker",
		tagline: "AI-powered storyboard creation tool.",
		description:
			"Storymaker turns a simple prompt into a full visual storyboard — generated scenes, images, and narrative structure in one flow. Built as a team project exploring how AI tools can assisit creative processes and collapse the timeline into minutes rather than days.",
		tags: ["Python", "TypeScript", "Imaplib", "OpenAI API", "FAISS", "FastAPI"],
		url: "https://pro0623-story-maker.vercel.app/",
		repo: "https://github.com/fac-31/Pro0623-StoryMaker",
		featured: false,
		year: 2025,
	},
	{
		slug: "local-events",
		title: "Local Events",
		tagline: "An AI powered event discovery platform.",
		description:
			"An AI-powered event discovery platform that scans for local events, generates engaging descriptions, and helps users filter by interest. Structured OpenAI I/O keeps the output consistent and the experience fast.",
		tags: ["Deno", "TypeScript", "Zod", "TailwindCSS", "MongoDB", "OpenAI API", "Axios"],
		repo: "https://github.com/fac-31/Pro0428-LocalEventFrontend",
		featured: false,
		year: 2025,
	},
];
