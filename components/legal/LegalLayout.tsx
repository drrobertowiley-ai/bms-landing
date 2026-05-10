import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-bms-blue-600 hover:text-bms-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <header className="mb-10 border-b border-bms-slate-200 pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-bms-slate-500">
            Última actualización: {lastUpdated}
          </p>
        </header>

        <article
          className="
            text-bms-slate-700 leading-relaxed
            [&>p]:mb-5 [&>p]:text-base
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-bms-slate-900 [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:text-lg [&>h3]:font-bold [&>h3]:tracking-tight [&>h3]:text-bms-slate-900 [&>h3]:mt-8 [&>h3]:mb-3
            [&>ul]:mb-5 [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:list-disc
            [&_li]:text-base [&_li]:leading-relaxed
            [&_strong]:font-semibold [&_strong]:text-bms-slate-900
            [&_a]:text-bms-blue-600 [&_a]:font-medium hover:[&_a]:underline
            [&>hr]:my-10 [&>hr]:border-bms-slate-200
          "
        >
          {children}
        </article>

        <footer className="mt-16 border-t border-bms-slate-200 pt-8 text-sm text-bms-slate-500">
          <p>
            ¿Dudas sobre este documento? Escríbenos a{" "}
            <a
              href="mailto:contacto@bms.services"
              className="font-semibold text-bms-blue-600 hover:text-bms-blue-700"
            >
              contacto@bms.services
            </a>
            .
          </p>
        </footer>
      </div>
    </main>
  );
}
