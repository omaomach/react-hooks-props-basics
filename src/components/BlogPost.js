import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="I know Joash is a top notch Software Engineer"
        isPublished={true} 
        forHowLong="8 months"/>
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Comment commentText="I know this to be true. - Bill Gates" />
    </div>
  );
}

export default BlogPost;
