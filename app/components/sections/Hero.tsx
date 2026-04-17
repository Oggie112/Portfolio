import { Button } from "../ui/Button";
import { SectionWrapper } from "../ui/SectionWrapper";

function scrollTo(id: string) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

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
					From half-baked ideas to pen & paper to deployment — turning good questions into good software, one problem at a time.
				</p>
				<div className="flex gap-4 flex-wrap">
					<Button
						href="#projects"
						variant="primary"
						onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
					>
						View my work
					</Button>
					<Button
						href="#contact"
						variant="ghost"
						onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
					>
						Get in touch
					</Button>
				</div>
			</div>
		</SectionWrapper>
	);
}
