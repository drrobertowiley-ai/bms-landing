import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

const TITLE = "Términos del Servicio — BMS";
const DESCRIPTION =
  "Condiciones de uso de la plataforma BMS (Business Management System).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: "/terminos" },
  openGraph: {
    type: "article",
    locale: "es_MX",
    url: "/terminos",
    siteName: "BMS · Business Management System",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Términos del servicio de BMS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/twitter-image.png"],
  },
};

const LAST_UPDATED = "9 de mayo de 2026";

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos del Servicio" lastUpdated={LAST_UPDATED}>
      <p>
        Estos Términos del Servicio (en adelante, los <strong>&quot;Términos&quot;</strong>)
        regulan el acceso y uso de la plataforma <strong>BMS — Business
        Management System</strong> (en adelante, la <strong>&quot;Plataforma&quot;</strong> o el
        <strong> &quot;Servicio&quot;</strong>) operada por{" "}
        <strong>EPX Solutions de México S.A. de C.V.</strong> (en adelante,{" "}
        <strong>&quot;BMS&quot;</strong>), con domicilio en Av. Río Mocorito 801 L1,
        Mexicali, Baja California, C.P. 21290, México, y ofrecida bajo el
        dominio <a href="https://bms.services">bms.services</a> y sus
        subdominios.
      </p>
      <p>
        Al registrarse, acceder o utilizar la Plataforma, el cliente
        (en adelante, el <strong>&quot;Cliente&quot;</strong>) acepta estos Términos en su
        totalidad. Si no está de acuerdo, debe abstenerse de usar el Servicio.
      </p>

      <h2>1. Definiciones</h2>
      <ul>
        <li>
          <strong>BMS:</strong> la plataforma multi-tenant de gestión empresarial
          ofrecida por su titular legal.
        </li>
        <li>
          <strong>Cliente:</strong> persona física o moral que contrata el
          Servicio bajo cualquiera de los planes vigentes.
        </li>
        <li>
          <strong>Usuario:</strong> persona designada por el Cliente para acceder
          a la Plataforma con credenciales individuales.
        </li>
        <li>
          <strong>Datos del Cliente:</strong> información que el Cliente o sus
          Usuarios cargan en BMS para su operación.
        </li>
      </ul>

      <h2>2. Descripción del Servicio</h2>
      <p>
        BMS provee herramientas integradas de gestión empresarial agrupadas en
        cinco módulos comerciales (Producción, Materiales, Ventas &amp; CRM,
        Gestión Operativa y Administración) accesibles desde cualquier
        navegador moderno. El alcance funcional disponible para el Cliente
        depende del plan contratado.
      </p>

      <h2>3. Cuenta y registro</h2>
      <p>
        El Cliente debe registrarse proporcionando información veraz y
        actualizada (correo electrónico, razón social, RFC y datos de
        facturación). Es responsable de la confidencialidad de las credenciales
        y de toda actividad realizada bajo su cuenta. Debe notificar de
        inmediato cualquier acceso no autorizado a{" "}
        <a href="mailto:contacto@bms.services">contacto@bms.services</a>.
      </p>

      <h2>4. Planes, facturación y pagos</h2>
      <p>
        Los precios y características de cada plan están publicados en{" "}
        <a href="https://bms.services/#precios">bms.services/#precios</a>. La
        facturación se realiza por adelantado de manera mensual o anual según
        el plan elegido. Los pagos se procesan a través de Stripe, Inc. y se
        rigen adicionalmente por sus políticas.
      </p>
      <p>
        Los precios están expresados en pesos mexicanos (MXN) y no incluyen el
        Impuesto al Valor Agregado (IVA), el cual se sumará al cobro
        correspondiente.
      </p>
      <p>
        El Cliente puede cancelar su suscripción en cualquier momento desde el
        Portal del Cliente de Stripe. La cancelación tomará efecto al final
        del período facturado en curso; no se realizan reembolsos prorrateados.
      </p>

      <h3>4.1 Renovación automática</h3>
      <p>
        Las suscripciones se renuevan automáticamente al final de cada período,
        salvo que el Cliente las cancele antes del término del mismo.
      </p>

      <h3>4.2 Pagos fallidos</h3>
      <p>
        Tras un pago fallido, BMS podrá suspender el acceso a la Plataforma
        después de un período de gracia razonable comunicado al Cliente. Los
        Datos del Cliente se conservan durante 30 días posteriores a la
        suspensión para permitir su recuperación o exportación.
      </p>

      <h2>5. Uso aceptable</h2>
      <p>El Cliente se obliga a no:</p>
      <ul>
        <li>
          Usar la Plataforma para actividades ilícitas o que violen derechos
          de terceros.
        </li>
        <li>
          Intentar vulnerar la seguridad, integridad o disponibilidad del
          Servicio.
        </li>
        <li>Realizar ingeniería inversa, decompilación o copia del software.</li>
        <li>Compartir credenciales o exceder el límite de Usuarios del plan.</li>
        <li>Cargar contenido ofensivo, malware o material protegido sin licencia.</li>
      </ul>

      <h2>6. Propiedad intelectual</h2>
      <p>
        Todos los derechos de propiedad intelectual sobre la Plataforma, su
        código fuente, marcas, diseños y documentación pertenecen a BMS o sus
        licenciantes. El Cliente recibe una licencia limitada, no exclusiva,
        intransferible y revocable para usar el Servicio durante la vigencia
        de su suscripción.
      </p>
      <p>
        Los Datos del Cliente son y permanecen propiedad del Cliente. BMS los
        usa exclusivamente para prestar el Servicio.
      </p>

      <h2>7. Confidencialidad y seguridad</h2>
      <p>
        BMS implementa medidas técnicas y organizativas razonables para
        proteger los Datos del Cliente, incluyendo cifrado en tránsito,
        respaldos automáticos diarios, control de acceso multi-tenant y
        bitácora de auditoría. El detalle de medidas se describe en la
        Política de Seguridad disponible bajo solicitud.
      </p>

      <h2>8. Disponibilidad del Servicio</h2>
      <p>
        BMS realizará esfuerzos comercialmente razonables para mantener la
        Plataforma disponible 24/7. Pueden ocurrir ventanas de mantenimiento
        programado que serán notificadas con anticipación cuando sea posible.
      </p>
      <p>
        Los compromisos de tiempo de respuesta y resolución (SLA) por plan se
        publican como anexo a estos Términos.
      </p>

      <h2>9. Limitación de responsabilidad</h2>
      <p>
        En la medida máxima permitida por la ley aplicable, la responsabilidad
        agregada de BMS frente al Cliente por cualquier reclamación derivada
        del Servicio queda limitada a los montos efectivamente pagados por el
        Cliente en los doce (12) meses anteriores al hecho que la origine.
      </p>
      <p>
        BMS no será responsable por daños indirectos, lucro cesante, pérdida
        de datos atribuible al Cliente o sus Usuarios, ni por interrupciones
        derivadas de causas fuera de su control razonable (caso fortuito,
        fuerza mayor, fallas de proveedores de internet o terceros).
      </p>

      <h2>10. Terminación</h2>
      <p>
        Cualquiera de las partes puede dar por terminada la relación con
        notificación por escrito. BMS podrá suspender o terminar el acceso de
        forma inmediata si el Cliente incumple gravemente estos Términos o
        usa la Plataforma de manera ilícita.
      </p>
      <p>
        A la terminación, el Cliente cuenta con 30 días para exportar sus
        Datos. Pasado ese plazo, BMS podrá eliminarlos definitivamente.
      </p>

      <h2>11. Modificaciones a los Términos</h2>
      <p>
        BMS podrá actualizar estos Términos para reflejar cambios en el
        Servicio o en la legislación aplicable. Los cambios materiales se
        notificarán con al menos 15 días de anticipación a la dirección de
        correo electrónico registrada por el Cliente.
      </p>

      <h2>12. Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos.
        Cualquier controversia será resuelta por los tribunales competentes
        de Mexicali, Baja California, renunciando las partes a cualquier
        otro fuero que pudiera corresponderles por razón de su domicilio
        presente o futuro.
      </p>

      <h2>13. Contacto</h2>
      <p>
        Para cualquier asunto relacionado con estos Términos, el Cliente puede
        comunicarse al correo{" "}
        <a href="mailto:contacto@bms.services">contacto@bms.services</a>.
      </p>

      <hr className="my-10" />
      <p className="text-sm text-bms-slate-500">
        Este documento es informativo y no sustituye asesoría legal. El
        Cliente debe revisarlo con su asesor jurídico antes de aceptar.
      </p>
    </LegalLayout>
  );
}
