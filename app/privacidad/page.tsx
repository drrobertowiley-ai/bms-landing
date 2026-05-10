import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Aviso de Privacidad — BMS",
  description:
    "Política de privacidad y aviso de privacidad de la plataforma BMS conforme a la LFPDPPP.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "9 de mayo de 2026";

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Aviso de Privacidad" lastUpdated={LAST_UPDATED}>
      <p>
        En cumplimiento de lo dispuesto por la <strong>Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares</strong>{" "}
        (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad,
        ponemos a su disposición el presente Aviso de Privacidad.
      </p>

      <h2>1. Identidad y domicilio del responsable</h2>
      <p>
        <strong>EPX Solutions de México S.A. de C.V.</strong>, con domicilio
        en Av. Río Mocorito 801 L1, Mexicali, Baja California, C.P. 21290,
        México, operadora de la plataforma BMS — Business Management System,
        es el responsable del tratamiento de sus datos personales. Para
        cualquier asunto relacionado con la protección de datos personales
        puede contactarnos al correo{" "}
        <a href="mailto:contacto@bms.services">contacto@bms.services</a>.
      </p>

      <h2>2. Datos personales que recabamos</h2>
      <p>
        Para la prestación de nuestros servicios podemos recabar los siguientes
        datos personales:
      </p>
      <ul>
        <li>
          <strong>De identificación y contacto:</strong> nombre completo,
          correo electrónico, número telefónico, dirección.
        </li>
        <li>
          <strong>Fiscales:</strong> RFC con homoclave, razón social, dirección
          fiscal, régimen fiscal.
        </li>
        <li>
          <strong>De facturación:</strong> datos de tarjeta de crédito o débito
          (procesados directamente por Stripe, Inc.; BMS no almacena estos
          datos en sus servidores).
        </li>
        <li>
          <strong>De uso:</strong> dirección IP, navegador, dispositivo,
          páginas visitadas, fecha y hora de acceso.
        </li>
        <li>
          <strong>De cuenta:</strong> credenciales de acceso (la contraseña se
          almacena cifrada con bcrypt; nunca en texto plano).
        </li>
      </ul>
      <p>
        Adicionalmente, los Usuarios del Cliente pueden cargar dentro de la
        Plataforma datos personales de empleados, clientes y proveedores. En
        relación con dichos datos, BMS actúa como <strong>encargado</strong>{" "}
        del tratamiento, siendo el Cliente el responsable.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <h3>3.1 Finalidades primarias</h3>
      <p>
        Sus datos personales serán utilizados para las siguientes finalidades
        primarias necesarias para el servicio:
      </p>
      <ul>
        <li>Crear y administrar su cuenta y la de su empresa.</li>
        <li>Prestar los servicios contratados.</li>
        <li>Procesar pagos y emitir facturas.</li>
        <li>Brindar soporte técnico y atención al cliente.</li>
        <li>
          Notificarle sobre cambios al servicio, actualizaciones de seguridad
          o términos.
        </li>
        <li>
          Cumplir con obligaciones legales, fiscales y regulatorias aplicables.
        </li>
      </ul>

      <h3>3.2 Finalidades secundarias</h3>
      <p>
        De manera adicional, podemos utilizar sus datos para las siguientes
        finalidades que no son indispensables. Si no desea que sus datos sean
        tratados para estos fines, puede manifestarlo en cualquier momento al
        correo señalado al final de este aviso.
      </p>
      <ul>
        <li>Envío de comunicaciones comerciales y novedades del servicio.</li>
        <li>
          Estudios estadísticos agregados (sin identificación individual) para
          mejorar el producto.
        </li>
        <li>Invitaciones a webinars, eventos y encuestas de satisfacción.</li>
      </ul>

      <h2>4. Derechos ARCO</h2>
      <p>
        Usted tiene derecho a conocer qué datos personales tenemos de usted,
        para qué los utilizamos y las condiciones del uso que les damos
        (<strong>Acceso</strong>). Asimismo, es su derecho solicitar la
        corrección de su información personal en caso de que esté
        desactualizada, inexacta o incompleta (<strong>Rectificación</strong>);
        que la eliminemos de nuestros registros o bases de datos cuando
        considere que la misma no está siendo utilizada conforme a los
        principios, deberes y obligaciones previstas en la normativa
        (<strong>Cancelación</strong>); así como oponerse al uso de sus datos
        personales para fines específicos (<strong>Oposición</strong>).
      </p>
      <p>
        Para ejercer cualquiera de los derechos ARCO, así como para revocar el
        consentimiento, deberá enviar una solicitud al correo{" "}
        <a href="mailto:contacto@bms.services">contacto@bms.services</a>{" "}
        indicando: (i) nombre completo y correo registrado; (ii) descripción
        clara de los datos sobre los que ejerce el derecho; (iii) copia de
        identificación oficial. Daremos respuesta en un plazo máximo de{" "}
        <strong>20 días hábiles</strong>.
      </p>

      <h2>5. Transferencias de datos</h2>
      <p>
        Para prestarle el servicio, podemos compartir sus datos personales con
        los siguientes terceros, todos comprometidos con cláusulas de
        confidencialidad y protección de datos:
      </p>
      <ul>
        <li>
          <strong>Stripe, Inc.</strong> (Estados Unidos) — procesamiento de
          pagos.
        </li>
        <li>
          <strong>Resend / proveedor de email transaccional</strong> — envío
          de notificaciones automatizadas y enlaces de acceso.
        </li>
        <li>
          <strong>Vercel, Inc.</strong> (Estados Unidos) — alojamiento de la
          Plataforma.
        </li>
        <li>
          <strong>Neon Database, Inc.</strong> (Estados Unidos) — base de
          datos transaccional.
        </li>
        <li>
          <strong>Autoridades competentes</strong> — cuando sea legalmente
          requerido.
        </li>
      </ul>
      <p>
        Estas transferencias internacionales se realizan al amparo de cláusulas
        contractuales estándar y bajo el principio de minimización del dato
        (solo se comparten los datos estrictamente necesarios).
      </p>

      <h2>6. Conservación de los datos</h2>
      <p>
        Conservaremos sus datos personales durante el tiempo que dure su
        relación contractual con BMS. Después de la cancelación o terminación
        del servicio, mantendremos sus datos durante un plazo adicional de{" "}
        <strong>5 años</strong> conforme a las obligaciones fiscales aplicables,
        después del cual serán eliminados de manera segura.
      </p>

      <h2>7. Cookies y tecnologías similares</h2>
      <p>
        Utilizamos cookies estrictamente necesarias para el funcionamiento de
        la sesión (autenticación, preferencias) y cookies analíticas
        agregadas para entender cómo se usa el servicio. Puede configurar su
        navegador para rechazar cookies; sin embargo, esto puede afectar
        algunas funciones de la Plataforma.
      </p>

      <h2>8. Medidas de seguridad</h2>
      <p>
        Implementamos medidas administrativas, técnicas y físicas razonables
        para proteger sus datos personales contra acceso no autorizado,
        pérdida, alteración o divulgación, incluyendo:
      </p>
      <ul>
        <li>Cifrado de datos en tránsito (TLS 1.3).</li>
        <li>Contraseñas hasheadas con bcrypt.</li>
        <li>Aislamiento multi-tenant a nivel de aplicación.</li>
        <li>Bitácora de auditoría de accesos y cambios.</li>
        <li>Respaldos automáticos diarios cifrados.</li>
        <li>Autenticación multifactor (MFA) opcional u obligatoria por plan.</li>
      </ul>

      <h2>9. Cambios al Aviso de Privacidad</h2>
      <p>
        Cualquier modificación al presente aviso será notificada a la dirección
        de correo electrónico registrada con al menos 15 días de anticipación.
        La versión vigente está siempre disponible en{" "}
        <a href="https://bms.services/privacidad">bms.services/privacidad</a>.
      </p>

      <h2>10. Contacto del responsable de privacidad</h2>
      <p>
        Para cualquier solicitud, queja o duda relacionada con sus datos
        personales:
      </p>
      <ul>
        <li>
          Correo:{" "}
          <a href="mailto:contacto@bms.services">contacto@bms.services</a>
        </li>
        <li>Asunto sugerido: &quot;Solicitud ARCO&quot; o &quot;Privacidad&quot;.</li>
      </ul>

      <hr className="my-10" />
      <p className="text-sm text-bms-slate-500">
        Este aviso busca cumplir con la LFPDPPP mexicana. El Cliente debe
        revisarlo con su asesor jurídico antes de aceptar. Para procesamiento
        de datos de residentes de la Unión Europea aplican obligaciones
        adicionales del GDPR.
      </p>
    </LegalLayout>
  );
}
