export interface Skill {
	name: string;
	category: "Language" | "Framework" | "Tool" | "Other";
	level?: "Beginner" | "Intermediate" | "Advanced";
}

export const skills: Skill[] = [
	// Languages
	{ name: "TypeScript", category: "Language", level: "Advanced" },
	{ name: "JavaScript", category: "Language", level: "Advanced" },
	{ name: "Python", category: "Language", level: "Beginner" },
	{ name: "C#", category: "Language", level: "Beginner" },

	// Frameworks
	{ name: "React", category: "Framework", level: "Advanced" },
	{ name: "Next.js", category: "Framework", level: "Intermediate" },
	{ name: "SvelteKit", category: "Framework", level: "Intermediate" },
	{ name: "Express", category: "Framework", level: "Intermediate" },
	{ name: "FastAPI", category: "Framework", level: "Beginner" },

	// Tools
	{ name: "Tailwind CSS", category: "Tool", level: "Advanced" },
	{ name: "Framer Motion", category: "Tool", level: "Intermediate" },
	{ name: "Git", category: "Tool", level: "Advanced" },
	{ name: "Vite", category: "Tool", level: "Intermediate" },
	{ name: "Zod", category: "Tool", level: "Intermediate" },
	{ name: "Sanity CMS", category: "Tool", level: "Intermediate" },
	{ name: "Supabase", category: "Tool", level: "Intermediate" },
	{ name: "MongoDB", category: "Tool", level: "Intermediate" },
	{ name: "PostgreSQL", category: "Tool", level: "Intermediate" },
	{ name: "Vercel", category: "Tool", level: "Intermediate" },

	// Other
	{ name: "OpenAI API", category: "Other", level: "Intermediate" },
	{ name: "LangGraph", category: "Other", level: "Beginner" },
	{ name: "RAG", category: "Other", level: "Beginner" },
	{ name: "Node.js", category: "Other", level: "Intermediate" },
];
