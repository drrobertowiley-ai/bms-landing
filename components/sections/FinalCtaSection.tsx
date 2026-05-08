import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-bms-gradient py-20 sm:py-24"
    >
      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="final-cta-title"
          className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          style={{ letterSpacing: "-0.025em" }}
        >
          Listo para profesionalizar tu operación
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-bms-blue-100 sm:text-lg">
          Agenda una demo de 30 minutos. Te mostramos BMS con datos parecidos a
          los tuyos y respondemos tus preguntas técnicas y comerciales.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contacto"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-bms-md bg-white px-7 text-base font-semibold text-bms-blue-700 shadow-bms-md transition-all hover:bg-bms-slate-50 hover:shadow-bms-lg focus-bms"
          >
            Solicitar demo gratis
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="https://app.bms.services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-bms-md border border-white/30 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-bms"
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </section>
  );
}
