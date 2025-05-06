import Script from "next/script";

export const GoogleAdsense = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5172485903469849"
      crossOrigin="anonymous"
    />
  );
};

export default GoogleAdsense;
