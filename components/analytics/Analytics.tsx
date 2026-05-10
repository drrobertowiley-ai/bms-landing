import Script from "next/script";

/**
 * Analytics — pre-cableado condicional.
 *
 * Cada bloque solo se inyecta si la env var pública correspondiente está
 * definida en tiempo de build. Cuando Roberto tenga las cuentas listas, basta
 * con pegar los IDs en `.env.local` (o en el dashboard de Vercel) y redeployar.
 *
 * Variables esperadas (todas opcionales, ver `.env.example`):
 *   - NEXT_PUBLIC_GA4_ID            (Google Analytics 4, ej. "G-XXXXXXXXXX")
 *   - NEXT_PUBLIC_META_PIXEL_ID     (Meta/Facebook Pixel, ej. "1234567890")
 *   - NEXT_PUBLIC_LINKEDIN_PARTNER_ID (LinkedIn Insight Tag, ej. "1234567")
 */
export function Analytics() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedinPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  const hasAny = Boolean(ga4Id || metaPixelId || linkedinPartnerId);
  if (!hasAny) return null;

  return (
    <>
      {ga4Id ? (
        <>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}

      {linkedinPartnerId ? (
        <>
          <Script id="linkedin-init" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${linkedinPartnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </Script>
          <Script id="linkedin-loader" strategy="afterInteractive">
            {`
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
