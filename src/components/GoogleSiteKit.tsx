import Script from "next/script";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
const googleAdSenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT;

const googleTagId = googleAnalyticsId ?? googleAdsId;

export default function GoogleSiteKit() {
  return (
    <>
      {googleTagManagerId ? (
        <>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `}
          </Script>
        </>
      ) : null}

      {googleTagId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
            strategy="afterInteractive"
          />
          <Script id="google-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${googleAnalyticsId ? `gtag('config', '${googleAnalyticsId}');` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      ) : null}

      {googleAdSenseClient ? (
        <Script
          async
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdSenseClient}`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
