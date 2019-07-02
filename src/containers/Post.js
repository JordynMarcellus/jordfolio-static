import React from "react";
import marked from "marked";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";
import { BlogPostMeta } from "../components/Meta";

export default withRouteData(({ post: { fields } }) => (
  <section>
    <BlogPostMeta
      headline={fields.headline}
      excerpt={fields.excerpt}
      slugline={`blog/post/${fields.slugline}`}
    />
    <Link to="/blog/">{"<"} Back</Link>
    <h1>{fields.headline}</h1>
    <article dangerouslySetInnerHTML={{ __html: marked(fields.textContent) }} />
  </section>
));
