import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import MorePost from "@/app/_components/more-post";
import { getAllPosts } from "@/lib/api";
import Gnb from "./_components/gnb";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Gnb />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MorePost posts={morePosts} />}
      </Container>
    </main>
  );
}
