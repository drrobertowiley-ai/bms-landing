import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Acuerdo de Nivel de Servicio (SLA) — BMS",
  description:
    "Compromisos de disponibilidad, soporte y tiempos de respuesta por plan en la plataforma BMS.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "9 de mayo de 2026";

export default function SlaPage() {
  return (
    <LegalLayout
      title="Acuerdo de Nivel de Servicio (SLA)"
      lastUpdated={LAST_UPDATED}
    >
      <p>
        Este documento describe los compromisos de disponibilidad, soporte y
        tiempos de respuesta de BMS para cada uno de sus planes. Es anexo a
        los <a href="/terminos">Términos del Servicio</a> y forma parte
        integrante de la relación con el Cliente.
      </p>

      <h2>1. Disponibilidad de la plataforma</h2>
      <p>
        BMS realiza esfuerzos comercialmente razonables para mantener la
        plataforma disponible y operativa. La disponibilidad mensual objetivo
        por plan es:
      </p>
      <ul>
        <li>
          <strong>Microempresa:</strong> 99.0% (≈ 7 horas de inactividad
          aceptable al mes).
        </li>
        <li>
          <strong>PyME:</strong> 99.5% (≈ 3.6 horas / mes).
        </li>
        <li>
          <strong>Empresa Grande:</strong> 99.9% (≈ 43 minutos / mes).
        </li>
        <li>
          <strong>Multiempresa:</strong> 99.95% (≈ 22 minutos / mes), con
          créditos de servicio si se incumple.
        </li>
      </ul>
      <p>
        El cálculo excluye ventanas de mantenimiento programado notificadas
        con al menos 48 horas de anticipación, y eventos fuera del control
        razonable de BMS (caso fortuito, fuerza mayor, fallas del proveedor
        de internet del Cliente, ataques distribuidos masivos, etc.).
      </p>

      <h2>2. Tiempos de respuesta de soporte</h2>
      <p>
        Las solicitudes se clasifican por severidad y atendemos cada plan
        según los siguientes tiempos máximos de primera respuesta:
      </p>

      <h3>2.1 Severidad Crítica (Producción caída)</h3>
      <ul>
        <li>
          <strong>Microempresa:</strong> 8 horas hábiles.
        </li>
        <li>
          <strong>PyME:</strong> 4 horas hábiles.
        </li>
        <li>
          <strong>Empresa Grande:</strong> 2 horas hábiles.
        </li>
        <li>
          <strong>Multiempresa:</strong> 30 minutos, 24/7.
        </li>
      </ul>

      <h3>2.2 Severidad Alta (Funcionalidad degradada)</h3>
      <ul>
        <li>
          <strong>Microempresa:</strong> 24 horas hábiles.
        </li>
        <li>
          <strong>PyME:</strong> 8 horas hábiles.
        </li>
        <li>
          <strong>Empresa Grande:</strong> 4 horas hábiles.
        </li>
        <li>
          <strong>Multiempresa:</strong> 1 hora, 24/7.
        </li>
      </ul>

      <h3>2.3 Severidad Media / Baja (Consultas, mejoras)</h3>
      <ul>
        <li>
          <strong>Microempresa:</strong> 72 horas hábiles.
        </li>
        <li>
          <strong>PyME:</strong> 48 horas hábiles.
        </li>
        <li>
          <strong>Empresa Grande:</strong> 24 horas hábiles.
        </li>
        <li>
          <strong>Multiempresa:</strong> 8 horas hábiles.
        </li>
      </ul>
      <p>
        <strong>Horas hábiles:</strong> lunes a viernes de 9:00 a 18:00 hora
        de la Ciudad de México, excluyendo días festivos oficiales en México.
      </p>

      <h2>3. Canales de soporte por plan</h2>
      <ul>
        <li>
          <strong>Microempresa:</strong> correo electrónico
          (contacto@bms.services) y centro de ayuda en línea.
        </li>
        <li>
          <strong>PyME:</strong> correo electrónico, centro de ayuda y chat
          en horario hábil.
        </li>
        <li>
          <strong>Empresa Grande:</strong> correo, centro de ayuda, chat y
          atención telefónica en horario hábil.
        </li>
        <li>
          <strong>Multiempresa:</strong> todo lo anterior + gerente de cuenta
          dedicado y línea directa 24/7 para incidentes críticos.
        </li>
      </ul>

      <h2>4. Mantenimiento programado</h2>
      <p>
        Las ventanas de mantenimiento mayor se programan preferentemente los
        domingos entre 02:00 y 06:00 hora de la Ciudad de México. Se notifica
        a los Clientes por correo y banner en la plataforma con al menos 48
        horas de anticipación.
      </p>
      <p>
        Mantenimiento de emergencia (parches de seguridad críticos) puede
        ejecutarse sin previo aviso, comunicándose lo antes posible a través
        de los canales habituales.
      </p>

      <h2>5. Respaldos y recuperación</h2>
      <ul>
        <li>
          <strong>Frecuencia:</strong> respaldos automáticos diarios cifrados.
        </li>
        <li>
          <strong>Retención:</strong> 30 días para todos los planes; 90 días
          para Empresa Grande; 1 año para Multiempresa.
        </li>
        <li>
          <strong>RPO objetivo</strong> (Recovery Point Objective): hasta 24
          horas para Microempresa/PyME; hasta 1 hora para Empresa Grande;
          hasta 15 minutos para Multiempresa.
        </li>
        <li>
          <strong>RTO objetivo</strong> (Recovery Time Objective): 8 horas
          para Microempresa/PyME; 4 horas para Empresa Grande; 1 hora para
          Multiempresa.
        </li>
      </ul>
      <p>
        Adicionalmente, los Clientes pueden descargar snapshots de sus datos
        en cualquier momento desde la plataforma.
      </p>

      <h2>6. Créditos de servicio (Multiempresa)</h2>
      <p>
        Cuando la disponibilidad mensual de un Cliente Multiempresa caiga
        por debajo del 99.95% objetivo, se aplicará un crédito en la
        siguiente factura conforme a la siguiente tabla:
      </p>
      <ul>
        <li>De 99.94% a 99.50%: crédito del 5% de la mensualidad afectada.</li>
        <li>De 99.49% a 99.00%: crédito del 10%.</li>
        <li>De 98.99% a 95.00%: crédito del 25%.</li>
        <li>Menor a 95.00%: crédito del 50%.</li>
      </ul>
      <p>
        El Cliente debe solicitar el crédito por escrito dentro de los 30
        días posteriores al cierre del mes afectado.
      </p>

      <h2>7. Cómo abrir un caso</h2>
      <p>
        Para abrir un caso de soporte, envíe un correo a{" "}
        <a href="mailto:contacto@bms.services">contacto@bms.services</a>{" "}
        incluyendo:
      </p>
      <ul>
        <li>Nombre de su empresa y plan contratado.</li>
        <li>Severidad estimada (Crítica / Alta / Media / Baja).</li>
        <li>Descripción detallada del problema.</li>
        <li>
          Pasos para reproducirlo y capturas de pantalla cuando sea posible.
        </li>
        <li>
          Si afecta a usuarios o áreas específicas, indíquelo expresamente.
        </li>
      </ul>

      <hr className="my-10" />
      <p className="text-sm text-bms-slate-500">
        Estos compromisos pueden ajustarse con notificación previa de 30 días.
        El SLA aplicable a cada Cliente es el vigente en su plan al momento
        de la incidencia.
      </p>
    </LegalLayout>
  );
}
