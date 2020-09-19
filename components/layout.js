import NavBar from "./NavBar";
import classNames from "classnames";
import { NextSeo } from "next-seo";

export default function Layout({
  fluid,
  children,
  className,
  title = "Modtoberfest",
  description,
  canonical,
  image,
  url,
  ...props
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://modtoberfest.com${canonical || "/"}`}
        openGraph={{
          type: "website",
          title: title,
          url: `https://modtoberfest.com${url || canonical || "/"}`,
          description: description,
          images: [
            {
              url: image || "https://modtoberfest.com/logo-half.png",
              alt: title + " logo",
            },
          ],
          site_name: "Modtoberfest",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col min-h-screen h-full">
        <NavBar />
        <main className={classNames("md:px-8 md:pt-10", className)}>
          {children}
        </main>
      </div>
    </>
  );
}
