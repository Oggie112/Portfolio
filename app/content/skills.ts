export interface Skill {
	name: string;
	category: "Language" | "Framework" | "Tool" | "Other";
	level?: "Beginner" | "Intermediate" | "Advanced";
}

export const skills: Skill[] = [
	{ name: "TypeScript", category: "Language", level: "Advanced" },
	{ name: "React", category: "Framework", level: "Advanced" },
	{ name: "React Router", category: "Framework", level: "Advanced" },
	{ name: "Tailwind CSS", category: "Tool", level: "Advanced" },
	{ name: "Framer Motion", category: "Tool", level: "Intermediate" },
];
