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
		slug: "example-project",
		title: "Example Project",
		tagline: "A beautiful project showcase",
		description:
			"This is an example project. Update this with your actual projects.",
		tags: ["React", "TypeScript", "Tailwind"],
		url: "https://example.com",
		repo: "https://github.com/example/repo",
		featured: true,
		year: 2024,
	},
];
