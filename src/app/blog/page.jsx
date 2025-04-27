import Link from "next/link";
import React from "react";
import { blogPosts } from "../data/blogdata";

export default function Page() {
  return (
    <div>
      {Array.isArray(blogPosts) &&
        blogPosts.map((post) => {
          return (
            <div key={post.id}>
              <Link
                className="border-2 border-black w-10"
                href={`/blog/${post.id}`} // Corrected URL structure
              >
                Click Me : {post.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
