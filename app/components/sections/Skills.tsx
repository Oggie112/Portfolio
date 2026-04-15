import { skills, type Skill } from "../../content/skills";
import { Badge } from "../ui/Badge";
import { SectionWrapper } from "../ui/SectionWrapper";

const CATEGORY_ORDER: Skill["category"][] = [
	"Language",
	"Framework",
	"Tool",
	"Other",
];

export function Skills() {
	const grouped = CATEGORY_ORDER.reduce<Record<string, Skill[]>>(
		(acc, category) => {
			const items = skills.filter((s) => s.category === category);
			if (items.length > 0) acc[category] = items;
			return acc;
		},
		{}
	);

	return (
		<SectionWrapper id="skills">
			<p className="text-[var(--color-text-muted)] text-sm font-mono mb-4 tracking-widest uppercase">
				Skills
			</p>
			<h2 className="text-[var(--color-text-primary)] text-4xl font-semibold mb-12 leading-tight">
				What I work with
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
				{Object.entries(grouped).map(([category, items]) => (
					<div key={category}>
						<h3 className="text-[var(--color-stone-lichen)] text-xs font-mono tracking-widest uppercase mb-4">
							{category}s
						</h3>
						<div className="flex flex-wrap gap-2">
							{items.map((skill) => (
								<Badge key={skill.name}>{skill.name}</Badge>
							))}
						</div>
					</div>
				))}
			</div>
		</SectionWrapper>
	);
}
