import React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
	return (
		<div
			className={`p-6 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-muted)] transition-all duration-200 ${onClick ? "cursor-pointer hover:border-[var(--color-border)] hover:shadow-lg" : ""} ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}
