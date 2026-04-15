import { Link } from "react-router";
import { projects } from "../../content/projects";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { SectionWrapper } from "../ui/SectionWrapper";

function ExternalLinkIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
			<polyline points="15 3 21 3 21 9" />
			<line x1="10" y1="14" x2="21" y2="3" />
		</svg>
	);
}

function GitHubIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
		</svg>
	);
}

interface ProjectCardProps {
	slug: string;
	title: string;
	tagline: string;
	tags: string[];
	year: number;
	url?: string;
	repo?: string;
}

function ProjectCard({ slug, title, tagline, tags, year, url, repo }: ProjectCardProps) {
	return (
		<Card className="flex flex-col h-full">
			<div className="flex-1">
				<div className="flex items-start justify-between gap-4 mb-3">
					<Link
						to={`/projects/${slug}`}
						className="text-[var(--color-text-primary)] text-xl font-semibold hover:text-[var(--color-green-mist)] transition-colors duration-200"
					>
						{title}
					</Link>
					<span className="text-[var(--color-text-muted)] text-xs font-mono shrink-0 mt-1">
						{year}
					</span>
				</div>
				<p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
					{tagline}
				</p>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Badge key={tag}>{tag}</Badge>
					))}
				</div>
			</div>

			{(url || repo) && (
				<div className="flex gap-4 mt-6 pt-4 border-t border-[var(--color-border-muted)]">
					{url && (
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 text-[var(--color-text-muted)] text-xs hover:text-[var(--color-green-mist)] transition-colors duration-200"
						>
							<ExternalLinkIcon />
							Live
						</a>
					)}
					{repo && (
						<a
							href={repo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 text-[var(--color-text-muted)] text-xs hover:text-[var(--color-green-mist)] transition-colors duration-200"
						>
							<GitHubIcon />
							Source
						</a>
					)}
				</div>
			)}
		</Card>
	);
}

export function Projects() {
	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);

	return (
		<SectionWrapper id="projects">
			<p className="text-[var(--color-text-muted)] text-sm font-mono mb-4 tracking-widest uppercase">
				Projects
			</p>
			<h2 className="text-[var(--color-text-primary)] text-4xl font-semibold mb-12 leading-tight">
				Things I've built
			</h2>

			{featured.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					{featured.map((project) => (
						<ProjectCard key={project.slug} {...project} />
					))}
				</div>
			)}

			{rest.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{rest.map((project) => (
						<ProjectCard key={project.slug} {...project} />
					))}
				</div>
			)}
		</SectionWrapper>
	);
}
