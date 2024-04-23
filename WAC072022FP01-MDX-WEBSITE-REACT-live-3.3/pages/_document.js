import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preload' href='/fonts/font.css' as='style' />
        <link rel='stylesheet' href='/fonts/font.css' />
        <link rel='shortcut icon' href='/favicon.ico' />
        {/* <!-- Start of HubSpot Embed Code --> */}
        {/* <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/19512864.js"
        ></Script> */}
        {/* HubSpot Tracking */}
        <Script
          type='text/javascript'
          id='hs-script-loader'
          async
          defer
          src='//js.hs-scripts.com/19512864.js'
        ></Script>
        {/* HubSpot Tracking */}

        <Script
          async
          id='gtag'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-780641659');`,
          }}
        ></Script>
        <Script
          async
          id='cloudfront'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.__lo_site_id = 293103;
 
          (function() {
          var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
          wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
           })();`,
          }}
        ></Script>
        <Script
          async
          id='gtm-script'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MXX8N7');`,
          }}
        ></Script>
        <Script
          async
          id='OptinMonsterApp'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `var om59b78f52e3e4d,om59b78f52e3e4d_poll=function(){var r=0;return function(n,l){clearInterval(r),r=setInterval(n,l)}}();!function(e,t,n){if(e.getElementById(n)){om59b78f52e3e4d_poll(function(){if(window['om_loaded']){if(!om59b78f52e3e4d){om59b78f52e3e4d=new OptinMonsterApp();return om59b78f52e3e4d.init({"s":"36806.59b78f52e3e4d","staging":0,"dev":0,"beta":0});}}},25);return;}var d=false,o=e.createElement(t);o.id=n,o.src="https://a.optnmstr.com/app/js/api.min.js",o.async=true,o.onload=o.onreadystatechange=function(){if(!d){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){try{d=om_loaded=true;om59b78f52e3e4d=new OptinMonsterApp();om59b78f52e3e4d.init({"s":"36806.59b78f52e3e4d","staging":0,"dev":0,"beta":0});o.onload=o.onreadystatechange=null;}catch(t){}}}};(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(o)}(document,"script","omapi-script");`,
          }}
        ></Script>
        <Script
          async
          id='_linkedin_data_partner_id'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `_linkedin_data_partner_id = "107223";
          `,
          }}
        ></Script>
        <Script
          async
          id='snap'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(){var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})();`,
          }}
        ></Script>
        <Script
          async
          id='Twitter'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init','nybzw');
          twq('track','PageView');`,
          }}
        >
          
        </Script>
        <Script
          async
          id='Twitter'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: ` (function(funnel) {var deferredEvents = [];window.funnelytics = {events: {trigger: function (name, attributes, callback, opts) {deferredEvents.push({name: name, attributes: attributes, callback: callback, opts: opts});}}};var insert = document.getElementsByTagName('script')[0],script = document.createElement('script');script.addEventListener('load', function() {window.funnelytics.init(funnel, false, deferredEvents);});script.src = 'https://cdn.funnelytics.io/track-v3.js';script.type = 'text/javascript';script.async = true;insert.parentNode.insertBefore(script, insert);})('24f431f4-c070-4873-b504-160acbabb652');`,
          }}
        ></Script>
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXX8N7"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=107223&fmt=gif" />`,
          }}
        ></noscript>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCD8BQZ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />

        <Script
          async
          id='equalWeb'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.interdeal = {
              "sitekey": "cd922d58efe4ddee8ffc6b6ef2932e14",
              "Position": "Left",
              "Menulang": "EN-GB",
              "domains": {
                  "js": "https://cdn.equalweb.com/",
                  "acc": "https://access.equalweb.com/"
              },
              "btnStyle": {
                  "vPosition": [
                      "80%",
                      null
                  ],
                  "scale": [
                      "0.8",
                      "0.8"
                  ],
                  "color": {
                      "main": "#e6051f",
                      "second": ""
                  },
                  "icon": {
                      "type": 7,
                      "shape": "semicircle"
                  }
              }
          };
          (function(doc, head, body){
            var coreCall             = doc.createElement('script');
            coreCall.src             = 'https://cdn.equalweb.com/core/4.3.7/accessibility.js';
            coreCall.defer           = true;
            coreCall.integrity       = 'sha512-hGa5HZtFkT1M7+tUDtU/cbw6AG0ORz3oblztCoTZ/z2qPyr7dgwH3zoT8qpgj21MgcRsMFLD6NNKePGvVks3Ig==';
            coreCall.crossOrigin     = 'anonymous';
            coreCall.setAttribute('data-cfasync', true );
            body? body.appendChild(coreCall) : head.appendChild(coreCall);
          })(document, document.head, document.body);`,
          }}
        ></Script>
    
      </body>
    </Html>
  );
}
