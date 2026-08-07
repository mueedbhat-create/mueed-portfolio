"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactEmail } from "@/components/emails/ContactEmail";
import { resume } from "@/data/resume";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
});

type ContactInput = z.infer<typeof schema>;

export async function sendContactEmail(formData: ContactInput) {
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return { error: "Please check your details and try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "Messaging is not configured yet." };
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: resume.email,
    subject: `New message: ${subject}`,
    replyTo: email,
    react: ContactEmail({ name, email, message }),
  });

  if (error) {
    return { error: "Failed to send. Please try again." };
  }

  return { success: true };
}