interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className = "" }: CardProps) {
	return (
		<div
			className={`p-6 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-muted)] ${className}`}
		>
			{children}
		</div>
	);
}
