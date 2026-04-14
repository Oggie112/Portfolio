import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "ghost" | "outline";
	children: React.ReactNode;
}

export function Button({
	variant = "primary",
	className = "",
	children,
	...props
}: ButtonProps) {
	const baseStyles =
		"px-6 py-3 rounded-md font-medium transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

	const variants = {
		primary: `bg-[var(--color-green-sage)] text-[var(--color-bg-base)] hover:bg-[var(--color-green-fern)] focus:ring-[var(--color-green-sage)]`,
		ghost: `bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-green-mist)] focus:ring-[var(--color-green-sage)]`,
		outline: `border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-green-sage)] hover:text-[var(--color-green-sage)] focus:ring-[var(--color-green-sage)]`,
	};

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
