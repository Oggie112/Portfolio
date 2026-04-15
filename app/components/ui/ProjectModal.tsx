import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "../../content/projects";
import { Badge } from "./Badge";

interface ProjectModalProps {
	project: Project | null;
	onClose: () => void;
}

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

function CloseIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	);
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
	useEffect(() => {
		if (!project) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [project, onClose]);

	useEffect(() => {
		document.body.style.overflow = project ? "hidden" : "";
		return () => { document.body.style.overflow = ""; };
	}, [project]);

	return (
		<AnimatePresence>
			{project && (
				<>
					{/* Backdrop */}
					<motion.div
						key="backdrop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
					/>

					{/* Panel */}
					<motion.div
						key="panel"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 24 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="fixed inset-x-0 bottom-0 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-[var(--nav-height)] md:bottom-auto z-40 w-full md:w-full md:max-w-2xl md:mt-8 bg-[var(--color-bg-surface)] border border-[var(--color-border-muted)] rounded-t-2xl md:rounded-2xl overflow-y-auto max-h-[85vh] md:max-h-[calc(100vh-var(--nav-height)-4rem)]"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="p-8">
							{/* Header */}
							<div className="flex items-start justify-between gap-4 mb-6">
								<div>
									<p className="text-[var(--color-text-muted)] text-xs font-mono mb-1">
										{project.year}
									</p>
									<h2 className="text-[var(--color-text-primary)] text-2xl font-semibold">
										{project.title}
									</h2>
									<p className="text-[var(--color-text-accent)] text-sm mt-1">
										{project.tagline}
									</p>
								</div>
								<button
									onClick={onClose}
									aria-label="Close"
									className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200 shrink-0 mt-1"
								>
									<CloseIcon />
								</button>
							</div>

							{/* Description */}
							<p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
								{project.description}
							</p>

							{/* Tags */}
							<div className="flex flex-wrap gap-2 mb-8">
								{project.tags.map((tag) => (
									<Badge key={tag}>{tag}</Badge>
								))}
							</div>

							{/* Links */}
							{(project.url || project.repo) && (
								<div className="flex gap-4 pt-6 border-t border-[var(--color-border-muted)]">
									{project.url && (
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-green-mist)] transition-colors duration-200"
										>
											<ExternalLinkIcon />
											Live site
										</a>
									)}
									{project.repo && (
										<a
											href={project.repo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-green-mist)] transition-colors duration-200"
										>
											<GitHubIcon />
											Source
										</a>
									)}
								</div>
							)}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
