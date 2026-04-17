import { useEffect } from "react";

const FOCUSABLE_SELECTORS = [
	"a[href]",
	"button:not([disabled])",
	"textarea",
	"input",
	"select",
	"[tabindex]:not([tabindex='-1'])",
].join(", ");

/**
 * Traps keyboard focus within a container while active.
 * Tab cycles forward, Shift+Tab cycles backward — focus cannot escape.
 */
export function useFocusTrap(
	containerRef: React.RefObject<HTMLElement | null>,
	active: boolean
) {
	useEffect(() => {
		if (!active || !containerRef.current) return;

		const container = containerRef.current;

		function handleKeyDown(e: KeyboardEvent) {
			if (e.key !== "Tab") return;

			const focusable = Array.from(
				container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
			);

			if (focusable.length === 0) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		}

		container.addEventListener("keydown", handleKeyDown);
		return () => container.removeEventListener("keydown", handleKeyDown);
	}, [active, containerRef]);
}
