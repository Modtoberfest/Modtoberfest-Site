import "../css/index.css";

import { Provider } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <DefaultSeo
        title="Modtoberfest"
        description="Celebrating the Minecraft open source community"
        canonical="https://modtoberfest.com"
        openGraph={{
          type: "website",
          title: "Modtoberfest",
          url: "https://modtoberfest.com",
          description: "Celebrating the Minecraft open source community",
          images: [
            {
              url: "https://modtoberfest.com/logo/badge-bg-pad.png",
              alt: "Modtoberfest logo",
            },
          ],
          site_name: "Modtoberfest",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" type="image/png" href="/logo/badge.png" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
