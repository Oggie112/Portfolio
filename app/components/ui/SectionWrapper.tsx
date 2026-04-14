import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface SectionWrapperProps {
	id: string;
	children: React.ReactNode;
	className?: string;
}

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const noAnimation = { hidden: {}, visible: {} };

export function SectionWrapper({
	id,
	children,
	className = "",
}: SectionWrapperProps) {
	const prefersReducedMotion = useReducedMotion();

	const variants = prefersReducedMotion ? noAnimation : fadeUp;

	return (
		<motion.section
			id={id}
			data-section={id}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, margin: "0px 0px -40% 0px" }}
			variants={variants}
			className={`py-28 px-6 md:px-12 lg:px-24 ${className}`}
		>
			<div className="mx-auto max-w-[var(--max-width)]">{children}</div>
		</motion.section>
	);
}
