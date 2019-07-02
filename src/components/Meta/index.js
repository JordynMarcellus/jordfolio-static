import React from "react";
import { Head } from "react-static";
import HEADSHOT from "../../assets/profile-shot.jpg";

export const BlogPostMeta = ({ headline, excerpt, slugline }) => (
  <Head>
    <title>{headline}</title>
    <meta name="author" content="Jordyn Marcellus" />
    <meta itemProp="name" content={headline} />
    <meta itemProp="description" content={excerpt} />
    <meta itemProp="image" content={HEADSHOT} />

    <meta
      property="og:url"
      content={`"https://www.jordynmarcellus.com/${slugline}"`}
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={headline} />
    <meta property="og:description" content={excerpt} />
    <meta property="og:image" content={HEADSHOT} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={headline} />
    <meta name="twitter:description" content={excerpt} />
    <meta name="twitter:image" content={HEADSHOT} />
  </Head>
);
