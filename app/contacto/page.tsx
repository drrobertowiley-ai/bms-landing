import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitar demo · BMS",
  description:
    "Agenda una demo de 30 minutos con BMS. Te mostramos la plataforma con datos parecidos a los de tu empresa.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-bms-slate-50">
        <section
          aria-labelledby="contacto-title"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Lado info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-600">
                Contacto
              </p>
              <h1
                id="contacto-title"
                className="mt-3 text-balance text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Hablemos de tu empresa
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-bms-slate-600 sm:text-lg">
                Cuéntanos qué áreas quieres profesionalizar y agendamos una
                demo de 30 minutos enfocada en tu caso. Sin compromisos.
              </p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-bms-md bg-bms-blue-50 text-bms-blue-700"
                  >
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bms-slate-900">
                      Email directo
                    </p>
                    <a
                      href="mailto:contacto@bms.services"
                      className="text-sm text-bms-slate-600 transition-colors hover:text-bms-blue-700 focus-bms"
                    >
                      contacto@bms.services
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-bms-md bg-bms-blue-50 text-bms-blue-700"
                  >
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bms-slate-900">
                      Tiempo de respuesta
                    </p>
                    <p className="text-sm text-bms-slate-600">
                      Respondemos en menos de 1 día hábil.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-bms-md bg-bms-blue-50 text-bms-blue-700"
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bms-slate-900">
                      Operamos desde
                    </p>
                    <p className="text-sm text-bms-slate-600">
                      México · 100% remoto, 100% en español.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
