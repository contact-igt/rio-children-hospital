import Script from "next/script";
import UTMSourceTracker from "../components/UTMSourceTracker";
import ClarityScript from "../components/ClarityScript";
import "./globals.css";

const GTM_ID = "GTM-5DS2V32X";

export const metadata = {
  title: "Rio Children's Hospital - 24/7 Emergency Care",
  description:
    "Rio Children's Hospital provides 24/7 emergency, NICU, PICU, maternity, and child healthcare services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        <ClarityScript />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <UTMSourceTracker />
        {children}
      </body>
    </html>
  );
}
