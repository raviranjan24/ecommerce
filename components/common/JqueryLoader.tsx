"use client";
import Script from "next/script";

export default function ClientScripts() {
  return (
    <>
      <Script
        src="/js/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.$ = window.jQuery;
          loadScript("/js/bootstrap.min.js", () => {
            loadScript("/js/bootstrap-select.min.js", () => {
              loadScript("/js/wow.min.js", () => {
                loadScript("/js/parallax.min.js", () => {
                  loadScript("/js/multiple-modal.js", () => {
                    loadScript("/js/carousel.js", () => {
                      loadScript("/js/main.js");
                    });
                  });
                });
              });
            });
          });
        }}
      />
      <Script
        id="tawk-chat"
        strategy="lazyOnload"
      >
        {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),
      s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/6a1c607826d0321c2b699929/1jpvdhn3l';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
      </Script>
    </>
  );
}

function loadScript(src: string, callback?: () => void) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  script.onload = () => {
    console.log("Loaded:", src);
    callback && callback();
  };
  document.body.appendChild(script);
}


// "use client";

// import Script from "next/script";

// export default function ClientScripts() {
//   return (
//     <>
//       <Script
//         src="/js/jquery.min.js"
//         strategy="beforeInteractive"
//         onLoad={() => {
//           // @ts-ignore
//           window.$ = window.jQuery;
//           console.log("jQuery loaded");
//         }}
//       />

//       <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
//       <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
//       <Script src="/js/bootstrap-select.min.js" strategy="afterInteractive" />
//       <Script src="/js/wow.min.js" strategy="afterInteractive" />
//       <Script src="/js/lazysize.min.js" strategy="afterInteractive" />
//       <Script src="/js/parallax.min.js" strategy="afterInteractive" />
//       <Script src="/js/simpleParallaxVanilla.umd.js" strategy="afterInteractive" />
//       <Script src="/js/multiple-modal.js" strategy="afterInteractive" />
//       <Script src="/js/carousel.js" strategy="afterInteractive" />
//       <Script src="/js/main.js" strategy="afterInteractive" />
//     </>
//   );
// }