"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

const FAQS: ReadonlyArray<Faq> = [
  {
    q: "¿Mis datos están aislados de los de otras empresas?",
    a: "Sí. BMS es multi-tenant con aislamiento estricto a nivel de aplicación y base de datos. Cada deploy ejecuta tests automáticos que verifican que ningún tenant pueda leer información de otro. Tu información nunca se mezcla con la de nadie más.",
  },
  {
    q: "¿Puedo exportar mis datos cuando quiera?",
    a: "Sí. Desde el panel de administración puedes generar un snapshot JSON completo de tu tenant cuando lo necesites, con todos los registros y archivos relacionados. Sin trabas ni costos extra.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "El onboarding típico es de 1 a 2 semanas. Configuramos contigo los módulos, cargamos tu catálogo inicial, capacitamos a tu equipo y te dejamos operando. Empresas con datos limpios suelen estar productivas la primera semana.",
  },
  {
    q: "¿Qué pasa si cancelo?",
    a: "Tus datos quedan disponibles 30 días después de la cancelación para que descargues tu snapshot JSON. Pasado ese plazo, los datos se eliminan de forma permanente conforme a nuestra política de privacidad.",
  },
  {
    q: "¿Tienen MFA?",
    a: "Sí. Soportamos doble factor TOTP compatible con Google Authenticator, Authy, 1Password y similares. El administrador puede hacerlo obligatorio para todos los usuarios o por rol.",
  },
  {
    q: "¿Funcionan en sectores regulados?",
    a: "Sí. BMS se diseñó pensando en manufactura, salud y servicios con requisitos de trazabilidad. Las certificaciones ISO 27001 y SOC 2 Type II están en nuestro roadmap; entre tanto, cumplimos con los controles equivalentes y los auditamos internamente.",
  },
];

function FaqItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-bms-slate-200 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-bms-blue-700 focus-bms"
      >
        <span className="text-base font-semibold text-bms-slate-900 sm:text-lg">
          {q}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={[
            "mt-1 h-5 w-5 flex-shrink-0 text-bms-slate-400 transition-transform",
            open ? "rotate-180 text-bms-blue-600" : "",
          ].join(" ")}
        />
      </button>
      {open && (
        <div className="pb-5 pr-9">
          <p className="text-pretty text-sm leading-relaxed text-bms-slate-600 sm:text-base">
            {a}
          </p>
        </div>
      )}
    </li>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-600">
            Preguntas frecuentes
          </p>
          <h2
            id="faq-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Resuelve tus dudas antes de la demo
          </h2>
        </div>

        <ul className="mt-12 rounded-bms-lg border border-bms-slate-200 bg-white px-6 shadow-bms-sm sm:px-8">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </ul>
      </div>
    </section>
  );
}
