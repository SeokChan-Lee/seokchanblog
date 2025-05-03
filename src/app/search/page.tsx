import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import SearchClient from "../_components/search-client";

export default function SearchPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <SearchClient posts={posts} />
    </Container>
  );
}
