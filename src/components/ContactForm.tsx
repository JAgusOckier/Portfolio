"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const templateReplayId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_REPLAY_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const validateContactForm = (input: FormData) => {
  const errors: Partial<FormData> = {};

  if (!input.name.trim()) {
    errors.name = "El nombre es requerido.";
  } else if (input.name.trim().length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email.trim()) {
    errors.email = "El email es requerido.";
  } else if (!emailRegex.test(input.email)) {
    errors.email = "El email no es válido.";
  }

  if (!input.message.trim()) {
    errors.message = "El mensaje es requerido.";
  } else if (input.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    const validationErrors = validateContactForm(form);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name as keyof FormData],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0 && formRef.current) {
      try {
        setIsLoading(true);
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        await emailjs.sendForm(
          serviceId,
          templateReplayId, // ID de la plantilla que creaste
          formRef.current,
          publicKey
        )
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const isFormInvalid =
    !form.name.trim() ||
    form.name.trim().length < 3 ||
    !form.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
    !form.message.trim() ||
    form.message.trim().length < 10;

  return (
    <div className="bg-section backdrop-blur-md rounded-xl p-8 mb-4 shadow-md border border-border md:w-2/3 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-foreground text-center">
        Contacto
      </h2>
      <form
      ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center items-center"
      >
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-base font-medium mb-1 text-textSecondary"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 rounded-md bg-background/80 text-foreground border border-border focus:outline-none focus:ring-1 focus:ring-acent"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-base font-medium mb-1 text-textSecondary"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 rounded-md bg-background/80 text-foreground border border-border focus:outline-none focus:ring-1 focus:ring-acent"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="message"
            className="block text-base font-medium mb-1 text-textSecondary"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 rounded-md bg-background/80 text-foreground border border-border focus:outline-none focus:ring-1 focus:ring-acent"
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isFormInvalid || isLoading}
          className="w-fit mt-4 px-4 py-2 rounded-md transition-colors bg-foreground/90 hover:bg-foreground text-background disabled:cursor-not-allowed disabled:bg-foreground/20 disabled:text-foreground/40"
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>

        {submitted && (
          <p className="text-center text-base text-green-500">
            ¡Mensaje enviado con exito te responderé pronto!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
