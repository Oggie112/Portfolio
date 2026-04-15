import { useEffect, useState } from "react";

export const SECTION_COLORS: Record<string, string> = {
	hero: "#0c1a0d",
	about: "#0f2018",
	projects: "#141a0f",
	skills: "#1b2314",
	contact: "#1d2618",
};

/**
 * Hook to detect which section is currently in view.
 * Returns the current section ID so BackdropAnimator can animate to that colour.
 *
 * Uses a viewport-relative trigger band (middle 40% of the screen) rather than
 * an element-height threshold — this works correctly for tall sections on mobile
 * that would never reach a 40% element-intersection ratio.
 *
 * When multiple sections fire in the same callback batch, the one with the
 * highest intersection ratio wins.
 */
export function useSectionBackground() {
	const [currentSection, setCurrentSection] = useState<string>("hero");

	useEffect(() => {
		const sections = document.querySelectorAll("[data-section]");

		const observer = new IntersectionObserver(
			(entries) => {
				const mostVisible = entries
					.filter((entry) => entry.isIntersecting)
					.reduce<IntersectionObserverEntry | null>(
						(best, entry) =>
							best === null || entry.intersectionRatio > best.intersectionRatio
								? entry
								: best,
						null
					);

				if (mostVisible) {
					const sectionId = mostVisible.target.getAttribute("data-section");
					if (sectionId) {
						setCurrentSection(sectionId);
					}
				}
			},
			{
				threshold: 0,
				rootMargin: "-30% 0px -30% 0px",
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return currentSection;
}
