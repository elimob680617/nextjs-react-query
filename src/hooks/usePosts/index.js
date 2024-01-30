import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://graphqlzero.almansi.me/api";

const fetchPosts = async () => {
  const {
    posts: { data },
  } = await request(
    endpoint,
    gql`
      query {
        posts {
          data {
            id
            title
          }
        }
      }
    `
  );
  return data;
};

const usePosts = (limit) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(limit),
  });
};

export { usePosts, fetchPosts };
