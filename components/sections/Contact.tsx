"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { resume } from "@/data/resume";
import { sendContactEmail } from "@/lib/actions";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject needs at least 5 characters"),
  message: z.string().min(20, "Message needs at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    setPending(true);
    try {
      const result = await sendContactEmail(values);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent! I'll get back to you soon.");
        reset();
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Let&apos;s build your <span className="text-gradient">next story.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a campaign, brand, or content project in mind? Tell me about it —
            I&apos;ll help you shape copy that converts.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${resume.email}`}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Send className="h-4 w-4 text-blue-400" /> {resume.email}
            </a>
            <a
              href={`tel:${resume.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-blue-400" /> {resume.phone}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@email.com" {...register("email")} />
              {errors.email && (
                <p className="text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="What's this about?" {...register("subject")} />
            {errors.subject && (
              <p className="text-xs text-red-400">{errors.subject.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" disabled={pending} className="w-full sm:w-auto">
            {pending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}