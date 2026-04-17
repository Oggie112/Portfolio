import { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function About() {
	const [imageError, setImageError] = useState(false);

	return (
		<SectionWrapper id="about">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div>
					<p className="text-[var(--color-text-muted)] text-sm font-mono mb-4 tracking-widest uppercase">
						About
					</p>
					<h2 className="text-[var(--color-text-primary)] text-4xl font-semibold mb-6 leading-tight">
						Who am I?
					</h2>
					<div className="space-y-4 text-[var(--color-text-secondary)] text-base leading-relaxed">
						<p>
						Before writing code professionally, I worked as a Legal Ombudsman. Navigating high-stakes, client-facing casework where getting the details right actually mattered.
						That experience shaped how I build my code. I care about the people on the other side of the screen, promotingclear structure, accessible design, and code that does what it says it does. A project isn't done when it works, it's done when it's easy to understand and change.
						</p>
						<p>
						I trained at Founders and Coders, a tuition-free, peer-led programme where you learn by building real things alongside other members. Picking up new technologies together, figuring it out as a team, and shipping software that actually solves something.
						Outside of work I'm usually running, cooking something overly ambitious, or reading.
						</p>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end">
					<div className="w-72 h-80 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-muted)] flex items-center justify-center overflow-hidden">
						{!imageError && (
							<img
								src="/images/headshot.jpg"
								alt="David Ogden"
								width={288}
								height={320}
								loading="eager"
								className="w-full h-full object-cover"
								onError={() => setImageError(true)}
							/>
						)}
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
