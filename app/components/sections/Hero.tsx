import { Button } from "../ui/Button";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Hero() {
	return (
		<SectionWrapper id="hero" className="min-h-screen flex items-center">
			<div className="max-w-3xl">
				<p className="text-[var(--color-text-muted)] text-sm font-mono mb-4 tracking-widest uppercase">
					Full-stack developer
				</p>
				<h1 className="text-[var(--color-text-primary)] text-6xl font-semibold leading-tight mb-6">
					David Ogden
				</h1>
				<p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10 max-w-xl">
					I build thoughtful web applications — clean interfaces, solid
					backends, and the kind of code that's still readable six months
					later.
				</p>
				<div className="flex gap-4 flex-wrap">
					<Button
						variant="primary"
						onClick={() =>
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						View my work
					</Button>
					<Button
						variant="ghost"
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						Get in touch
					</Button>
				</div>
			</div>
		</SectionWrapper>
	);
}
