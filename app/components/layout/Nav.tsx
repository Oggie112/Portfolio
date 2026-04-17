import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavProps {
	currentSection: string;
	onNavigate?: () => void;
}

const NAV_LINKS = [
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" },
];

function GitHubIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
		</svg>
	);
}

function scrollTo(id: string) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Nav({ currentSection, onNavigate }: NavProps) {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 80);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent body scroll while menu is open
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => { document.body.style.overflow = ""; };
	}, [menuOpen]);

	function handleNavLink(id: string) {
		scrollTo(id);
		setMenuOpen(false);
		onNavigate?.();
	}

	return (
		<>
			<nav
				aria-label="Main navigation"
				className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 transition-all duration-300 ${
					scrolled || menuOpen
						? "bg-[var(--color-bg-surface)] border-b border-[var(--color-border-muted)]"
						: "bg-transparent"
				}`}
				style={{ height: "var(--nav-height)" }}
			>
				<div className="mx-auto max-w-[var(--max-width)] h-full flex items-center justify-between">
					{/* Name / logo */}
					<button
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
							setMenuOpen(false);
						}}
						className="text-[var(--color-text-primary)] font-semibold text-sm hover:text-[var(--color-green-mist)] transition-colors duration-200"
					>
						David Ogden
					</button>

					{/* Desktop links */}
					<div className="hidden md:flex items-center gap-8">
						{NAV_LINKS.map(({ id, label }) => {
							const isActive = currentSection === id;
							return (
								<a
									key={id}
									href={`#${id}`}
									onClick={(e) => { e.preventDefault(); scrollTo(id); onNavigate?.(); }}
									className={`relative text-sm transition-colors duration-200 pb-1 ${
										isActive
											? "text-[var(--color-text-accent)]"
											: "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
									}`}
								>
									{label}
									{isActive && (
										<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-green-sage)]" />
									)}
								</a>
							);
						})}

						<a
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub profile"
							className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
						>
							<GitHubIcon />
						</a>
					</div>

					{/* Mobile: hamburger only */}
					<div className="flex md:hidden items-center">
						<button
							onClick={() => setMenuOpen((prev) => !prev)}
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							aria-expanded={menuOpen}
							className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 flex flex-col justify-center gap-1.5 w-6 h-6"
						>
							<motion.span
								animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
								transition={{ duration: 0.2 }}
								className="block h-px w-6 bg-current origin-center"
							/>
							<motion.span
								animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
								transition={{ duration: 0.15 }}
								className="block h-px w-6 bg-current"
							/>
							<motion.span
								animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
								transition={{ duration: 0.2 }}
								className="block h-px w-6 bg-current origin-center"
							/>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile overlay menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 bg-[var(--color-bg-surface)] flex flex-col px-6 md:hidden"
						style={{ paddingTop: "var(--nav-height)" }}
					>
						<nav aria-label="Mobile navigation" className="flex flex-col justify-center flex-1 gap-2">
							{NAV_LINKS.map(({ id, label }, index) => (
								<motion.a
									key={id}
									href={`#${id}`}
									initial={{ opacity: 0, x: -16 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.2, delay: index * 0.05 }}
									onClick={(e) => { e.preventDefault(); handleNavLink(id); }}
									className={`text-left text-3xl font-semibold py-3 transition-colors duration-200 ${
										currentSection === id
											? "text-[var(--color-text-accent)]"
											: "text-[var(--color-text-primary)] hover:text-[var(--color-green-mist)]"
									}`}
								>
									{label}
								</motion.a>
							))}
						</nav>

						<div className="pb-10">
							<a
								href="https://github.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
							>
								<GitHubIcon />
								<span className="text-sm">GitHub</span>
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
