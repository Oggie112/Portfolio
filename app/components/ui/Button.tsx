interface BaseProps {
	variant?: "primary" | "ghost" | "outline" | "sage";
	children: React.ReactNode;
	className?: string;
}

interface AsAnchor extends BaseProps {
	href: string;
	external?: boolean;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface AsButton extends BaseProps {
	href?: never;
	external?: never;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}

type ButtonProps = AsAnchor | AsButton;

const baseStyles =
	"inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-surface)]";

const variants = {
	primary: `bg-[var(--color-green-sage)] text-[var(--color-bg-base)] hover:bg-[var(--color-green-fern)] focus:ring-[var(--color-green-sage)]`,
	ghost: `bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-green-mist)] focus:ring-[var(--color-green-sage)]`,
	outline: `border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-green-sage)] hover:text-[var(--color-green-sage)] focus:ring-[var(--color-green-sage)]`,
	sage: `border border-[var(--color-green-sage)] text-[var(--color-green-mist)] hover:bg-[var(--color-green-sage)] hover:text-[var(--color-bg-base)] focus:ring-[var(--color-green-sage)]`,
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
	const classes = `${baseStyles} ${variants[variant]} ${className}`;

	if ("href" in props && props.href) {
		const { href, external, onClick } = props as AsAnchor;
		return (
			<a
				href={href}
				onClick={onClick}
				className={classes}
				{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			>
				{children}
			</a>
		);
	}

	const { onClick, type, disabled } = props as AsButton;
	return (
		<button type={type} disabled={disabled} onClick={onClick} className={classes}>
			{children}
		</button>
	);
}
