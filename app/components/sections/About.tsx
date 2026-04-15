import { SectionWrapper } from "../ui/SectionWrapper";

export function About() {
	return (
		<SectionWrapper id="about">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div>
					<p className="text-[var(--color-text-muted)] text-sm font-mono mb-4 tracking-widest uppercase">
						About
					</p>
					<h2 className="text-[var(--color-text-primary)] text-4xl font-semibold mb-6 leading-tight">
						The developer behind the work
					</h2>
					<div className="space-y-4 text-[var(--color-text-secondary)] text-base leading-relaxed">
						<p>
							I'm a full-stack developer focused on building web applications
							that are fast, accessible, and maintainable. I work across the
							stack — from crafting interfaces in React and TypeScript to
							designing APIs and working with PostgreSQL.
						</p>
						<p>
							I care about the details: good naming, clear structure, and code
							that communicates its intent. A project isn't done when it works
							— it's done when it's easy to understand and change.
						</p>
						<p>
							[Add a personal touch here — outside interests, background,
							location.]
						</p>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end">
					<div className="w-72 h-80 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-muted)] flex items-center justify-center">
						<span className="text-[var(--color-text-muted)] text-sm font-mono">
							photo
						</span>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
