import { usePosts } from "@/hooks";
import React, { useState } from "react";

export const PostList = () => {
  const [postCount, setPostCount] = useState(10);
  const { data, isPending, isFetching } = usePosts(postCount);

  if (isPending) return <div>Loading</div>;

  return (
    <section>
      <ul>
        {data?.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href="#">{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
