import { contactSchema } from "./validations";

export interface ContactActionResult {
	success: boolean;
	error?: string;
	fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
}

export async function handleContactForm(
	formData: FormData
): Promise<ContactActionResult> {
	const result = contactSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		message: formData.get("message"),
	});

	if (!result.success) {
		const fieldErrors: ContactActionResult["fieldErrors"] = {};
		result.error.issues.forEach((issue) => {
			const field = issue.path[0] as "name" | "email" | "message";
			fieldErrors[field] = issue.message;
		});
		return { success: false, fieldErrors };
	}

	// TODO (3CP.5): send via Resend once RESEND_API_KEY is configured
	// const resend = new Resend(process.env.RESEND_API_KEY);
	// await resend.emails.send({
	// 	from: "portfolio@yourdomain.com",
	// 	to: process.env.CONTACT_TO_EMAIL!,
	// 	subject: `Portfolio contact from ${result.data.name}`,
	// 	text: result.data.message,
	// 	replyTo: result.data.email,
	// });

	return { success: true };
}
