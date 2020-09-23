import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/shared/PageTitle";
import TipEntry from "./TipEntry";

export default function Tips() {
  return (
    <Layout
      title="Tips"
      description="Tips about how to participate in Modtoberfest."
      canonical="/tips"
    >
      <PageTitle>Tips</PageTitle>
      <div className="faq">

      <TipEntry title="How do I make a Pull Request?">
          The first step in making a Pull Request is to fork the target project
          on GitHub. Then you can edit files in the browser or clone your fork
          and make the changes locally. Once the changes are done push them to
          GitHub. You can then go to the original project and create a Pull
          Request. Make sure to select the compare across forks option.
        </TipEntry>

        <TipEntry title="What should my PR do?">
          Looking at the open issues on the issue tracker can be a great source
          of inspiration for new pull requests, especially if the request has
          the help wanted label. Another way you can help projects out is by adding 
          support for other mods, like adding JEI or WAILA/TOP support.
        </TipEntry>

        <TipEntry title="How can non-coders participate?">
          If you speak a non-English language then translating mods to other
          languages is a great way to participate in the challenge. Minecraft
          also has support for joke languages like "pirate speak" that anyone
          can translate to with enough creativity. Remember to exercise caution
          when translating to joke languages as they can easily become spam.
          <br/><br/>
          If you are an artist you can look into improving the textures or 
          even creating new textures for upcoming features. It's good etiquette
          to reach out to the project maintainer before doing this as they may
          not want their textures to be remade. Communication is key.
        </TipEntry>

      </div>
    </Layout>
  );
}
