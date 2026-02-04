"use client";

import Script from "next/script";

export default function ClientScripts() {
  return (
    <>
      <Script
        src="/js/jquery.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          // @ts-ignore
          window.$ = window.jQuery;
          console.log("jQuery loaded");
        }}
      />

      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap-select.min.js" strategy="afterInteractive" />
      <Script src="/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/js/lazysize.min.js" strategy="afterInteractive" />
      <Script src="/js/parallax.min.js" strategy="afterInteractive" />
      <Script src="/js/simpleParallaxVanilla.umd.js" strategy="afterInteractive" />
      <Script src="/js/multiple-modal.js" strategy="afterInteractive" />
      <Script src="/js/carousel.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}