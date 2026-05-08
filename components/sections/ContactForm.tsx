"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const COMPANY_SIZES = [
  { value: "1-10", label: "1 — 10 colaboradores" },
  { value: "11-50", label: "11 — 50 colaboradores" },
  { value: "51-200", label: "51 — 200 colaboradores" },
  { value: "200+", label: "Más de 200" },
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nombre = String(data.get("nombre") ?? "").trim();
    const empresa = String(data.get("empresa") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const tamano = String(data.get("tamano") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const subject = `Demo BMS · ${empresa || nombre}`;
    const body = [
      `Nombre: ${nombre}`,
      `Empresa: ${empresa}`,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      `Tamaño: ${tamano}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    const mailto =
      "mailto:contacto@bms.services" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-bms-lg border border-bms-slate-200 bg-white p-6 shadow-bms-sm sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="nombre"
          name="nombre"
          label="Nombre"
          type="text"
          required
          autoComplete="name"
          placeholder="Roberto Wiley"
        />
        <Field
          id="empresa"
          name="empresa"
          label="Empresa"
          type="text"
          required
          autoComplete="organization"
          placeholder="Nombre comercial"
        />
        <Field
          id="email"
          name="email"
          label="Email corporativo"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@empresa.com"
        />
        <Field
          id="telefono"
          name="telefono"
          label="Teléfono"
          type="tel"
          autoComplete="tel"
          placeholder="+52 ..."
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="tamano"
            className="mb-1.5 block text-sm font-medium text-bms-slate-700"
          >
            Tamaño de la empresa
          </label>
          <select
            id="tamano"
            name="tamano"
            required
            defaultValue=""
            className="block h-11 w-full rounded-bms-md border border-bms-slate-200 bg-white px-3 text-sm text-bms-slate-900 shadow-bms-sm transition-colors focus:border-bms-blue-500 focus:outline-none focus:ring-2 focus:ring-bms-blue-500/20"
          >
            <option value="" disabled>
              Selecciona…
            </option>
            {COMPANY_SIZES.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="mb-1.5 block text-sm font-medium text-bms-slate-700"
          >
            ¿Qué áreas quieres profesionalizar?
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            placeholder="Cuéntanos brevemente sobre tu operación y qué módulos te interesan más."
            className="block w-full rounded-bms-md border border-bms-slate-200 bg-white px-3 py-2.5 text-sm text-bms-slate-900 shadow-bms-sm transition-colors placeholder:text-bms-slate-400 focus:border-bms-blue-500 focus:outline-none focus:ring-2 focus:ring-bms-blue-500/20"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-bms-md bg-bms-blue-600 px-6 text-base font-semibold text-white shadow-bms-md transition-colors hover:bg-bms-blue-700 focus-bms sm:w-auto"
      >
        Enviar solicitud
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      {submitted && (
        <p
          role="status"
          className="mt-4 text-sm text-bms-success"
        >
          Abrimos tu cliente de correo. Si no se abre, escríbenos directo a
          contacto@bms.services.
        </p>
      )}

      <p className="mt-4 text-xs text-bms-slate-500">
        Al enviar aceptas que te contactemos para coordinar la demo. No
        compartimos tus datos con terceros.
      </p>
    </form>
  );
}

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

function Field({
  id,
  name,
  label,
  type,
  required = false,
  autoComplete,
  placeholder,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-bms-slate-700"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-bms-danger">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="block h-11 w-full rounded-bms-md border border-bms-slate-200 bg-white px-3 text-sm text-bms-slate-900 shadow-bms-sm transition-colors placeholder:text-bms-slate-400 focus:border-bms-blue-500 focus:outline-none focus:ring-2 focus:ring-bms-blue-500/20"
      />
    </div>
  );
}
