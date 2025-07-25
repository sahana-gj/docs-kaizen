import { BlogSidebar } from "./BlogSidebar";
import { TableOfContents } from "./TableOfContents";
import { BlogContent } from "./BlogContent";
import { blogPosts } from "@/data/blog-posts";
import { useParams } from "react-router-dom";

export function BlogLayout() {
  const { postId } = useParams();
  console.log("BlogLayout rendering with postId:", postId);
  const post = postId ? blogPosts[postId] : blogPosts.introduction;
  console.log("Selected post:", post?.title);

  if (!post) {
    return (
      <div className="flex h-screen">
        <div className="w-64 bg-docs-nav border-r border-docs-border flex items-center justify-center">
          <div className="text-docs-nav-foreground">Navigation</div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground">The requested documentation page could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      <BlogSidebar />
      <BlogContent post={post} />
      <TableOfContents headings={post.headings} />
    </div>
  );
}