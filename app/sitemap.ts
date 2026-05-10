import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bms.services";

/**
 * Sitemap dinámico de las rutas estáticas del landing.
 * Cada vez que se agregue una ruta nueva, súmala a este array.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/contacto", changeFrequency: "monthly", priority: 0.9 },
    { path: "/ayuda", changeFrequency: "monthly", priority: 0.7 },
    { path: "/terminos", changeFrequency: "yearly", priority: 0.4 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.4 },
    { path: "/sla", changeFrequency: "yearly", priority: 0.4 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
