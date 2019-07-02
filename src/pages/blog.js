import React from "react";
import { withRouteData, Head } from "react-static";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { BlogPostMeta } from "../components/Meta";

const BlogPostCardWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const BlogPostCard = styled.li`
  list-style-type: none;
  margin-top: 2rem;
  margin-bottom: 0rem;
`;

const sortByCreatedAtDate = (a, b) => {
  return Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt)
}

export default withRouteData(({ posts }) => (
  <section>
    <BlogPostMeta
      headline="Jordovision"
      excerpt="No one asked for this, but Jordyn decided to do it anyway"
      slugline="blog"
    />
    <BlogPostCardWrapper>
      {posts.sort(sortByCreatedAtDate).map(post => {
        return (        
          <BlogPostCard key={post.sys.id}>
            <h1>{post.fields.headline}</h1>
            <p>Created: {
                new Date(
                  Date.parse(post.sys.createdAt)
                ).toLocaleDateString()
              }
            </p>
            <p>{post.fields.excerpt}</p>
            <Link to={`/blog/post/${post.fields.slugline}/`}>Read now</Link>
          </BlogPostCard>
        )
      })}
    </BlogPostCardWrapper>
  </section>
));
