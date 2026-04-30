"use client";

import Script from "next/script";

export default function ExternalScript() {
  return (
    <Script
      src="https://nexus.softxic.com/widget.js"
      strategy="afterInteractive"
      data-organization-id="org_3CaOEbHunjnaszpUygiJHiO4mf1"
    />
  );
}
