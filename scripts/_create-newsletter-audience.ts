// Crea (o encuentra) la audience "BMS Newsletter" en Resend.
// Imprime el ID que debes pegar como RESEND_AUDIENCE_ID en Vercel.
//
// Uso:
//   1. Asegúrate de tener RESEND_API_KEY en .env.local
//   2. cd C:\Users\ribaw\bms-landing
//   3. npx tsx scripts/_create-newsletter-audience.ts
//
// Idempotente: si ya existe una audience con el nombre, devuelve su ID.

import "dotenv/config";
import { Resend } from "resend";

const AUDIENCE_NAME = "BMS Newsletter";

async function main() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no esta en .env.local");
    process.exit(1);
  }

  const resend = new Resend(apiKey);

  // 1) Listar audiences existentes
  const list = await resend.audiences.list();
  if (list.error) {
    console.error("Error listando audiences:", list.error);
    process.exit(1);
  }
  const existing = list.data?.data?.find((a) => a.name === AUDIENCE_NAME);
  if (existing) {
    console.log(`Audience "${AUDIENCE_NAME}" ya existe.`);
    console.log(`  ID: ${existing.id}`);
    console.log("\nPega esto en Vercel:");
    console.log(`  RESEND_AUDIENCE_ID=${existing.id}`);
    return;
  }

  // 2) Crear si no existe
  const created = await resend.audiences.create({ name: AUDIENCE_NAME });
  if (created.error) {
    console.error("Error creando audience:", created.error);
    process.exit(1);
  }
  if (!created.data) {
    console.error("Resend no devolvio data");
    process.exit(1);
  }
  console.log(`Audience "${AUDIENCE_NAME}" creada.`);
  console.log(`  ID: ${created.data.id}`);
  console.log("\nPega esto en Vercel:");
  console.log(`  RESEND_AUDIENCE_ID=${created.data.id}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
