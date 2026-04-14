import { motion } from "framer-motion";
import { SECTION_COLORS } from "../hooks/useSectionBackground";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface BackdropAnimatorProps {
	currentSection: string;
}

/**
 * Animated backdrop that smoothly transitions background color
 * as the user scrolls between sections.
 *
 * - Sits fixed behind all content (z-index: -1)
 * - Uses Framer Motion to animate color changes smoothly (0.8s)
 * - Respects prefers-reduced-motion by disabling animations
 */
export function BackdropAnimator({ currentSection }: BackdropAnimatorProps) {
	const prefersReducedMotion = useReducedMotion();
	const targetColor = SECTION_COLORS[currentSection] || SECTION_COLORS.hero;

	return (
		<motion.div
			className="fixed inset-0 -z-10"
			animate={{
				backgroundColor: targetColor,
			}}
			transition={
				prefersReducedMotion
					? { duration: 0 }
					: {
							duration: 0.8,
							ease: "easeInOut",
					  }
			}
		/>
	);
}
