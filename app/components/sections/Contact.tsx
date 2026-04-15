import { Form, useActionData, useNavigation } from "react-router";
import type { ContactActionResult } from "../../lib/actions";
import { Button } from "../ui/Button";
import { SectionWrapper } from "../ui/SectionWrapper";

const inputClass =
	"w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-muted)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] rounded-md px-4 py-3 text-sm transition-colors duration-200 focus:outline-none focus:border-[var(--color-green-sage)] focus:ring-1 focus:ring-[var(--color-green-sage)]";

const errorClass = "text-xs text-red-400 mt-1";

export function Contact() {
	const actionData = useActionData<ContactActionResult>();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<SectionWrapper id="contact">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
				<div>
					<p className="text-[var(--color-text-muted)] text-sm font-mono mb-4 tracking-widest uppercase">
						Contact
					</p>
					<h2 className="text-[var(--color-text-primary)] text-4xl font-semibold mb-4 leading-tight">
						Get in touch
					</h2>
					<p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-8">
						Have a project in mind, a question, or just want to say hello?
						Drop me a message and I'll get back to you.
					</p>

					{actionData?.success ? (
						<div className="p-4 rounded-md border border-[var(--color-green-sage)] bg-[var(--color-bg-surface)]">
							<p className="text-[var(--color-green-mist)] text-sm">
								Message sent — I'll be in touch soon.
							</p>
						</div>
					) : (
						<Form method="post" className="space-y-5">
							<input type="hidden" name="_intent" value="contact" />

							<div>
								<label
									htmlFor="name"
									className="block text-[var(--color-text-secondary)] text-sm mb-1.5"
								>
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									placeholder="Your name"
									autoComplete="name"
									className={inputClass}
								/>
								{actionData?.fieldErrors?.name && (
									<p className={errorClass}>{actionData.fieldErrors.name}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-[var(--color-text-secondary)] text-sm mb-1.5"
								>
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									placeholder="you@example.com"
									autoComplete="email"
									className={inputClass}
								/>
								{actionData?.fieldErrors?.email && (
									<p className={errorClass}>{actionData.fieldErrors.email}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-[var(--color-text-secondary)] text-sm mb-1.5"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									placeholder="What's on your mind?"
									className={`${inputClass} resize-none`}
								/>
								{actionData?.fieldErrors?.message && (
									<p className={errorClass}>
										{actionData.fieldErrors.message}
									</p>
								)}
							</div>

							{actionData?.error && (
								<p className={errorClass}>{actionData.error}</p>
							)}

							<Button
								type="submit"
								variant="primary"
								disabled={isSubmitting}
								className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? "Sending…" : "Send message"}
							</Button>
						</Form>
					)}
				</div>

				<div className="lg:pt-20">
					<h3 className="text-[var(--color-stone-lichen)] text-xs font-mono tracking-widest uppercase mb-6">
						Other ways to reach me
					</h3>
					<div className="space-y-4">
						<a
							href="mailto:your@email.com"
							className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-green-mist)] transition-colors duration-200"
						>
							<span className="text-sm">your@email.com</span>
						</a>
						<a
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-green-mist)] transition-colors duration-200"
						>
							<span className="text-sm">GitHub</span>
						</a>
						<a
							href="https://linkedin.com/in/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-green-mist)] transition-colors duration-200"
						>
							<span className="text-sm">LinkedIn</span>
						</a>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
