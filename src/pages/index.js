import { dehydrate, QueryClient } from "@tanstack/react-query";

import { PostList } from "@/components";
import { fetchPosts } from "@/hooks";

const Home = () => {
  return (
    <>
      <PostList />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", 10],
    queryFn: () => fetchPosts(10),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
