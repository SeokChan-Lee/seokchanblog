import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(
    new Set(posts.map((post) => post.category?.toLowerCase()).filter(Boolean))
  );
  return categories.map((category) => ({ category }));
}

export default async function CategoryPage(props: any) {
  const { category } = await props.params;

  const categoryLower = category.toLowerCase();
  const posts = getAllPosts();
  const filtered = posts.filter(
    (post) => post.category?.toLowerCase() === categoryLower
  );

  if (filtered.length === 0) notFound();

  const formattedCategory =
    categoryLower.charAt(0).toUpperCase() + categoryLower.slice(1);

  return (
    <Container>
      <section>
        <Link href="/">
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight mt-16">
            {formattedCategory}
          </h2>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {filtered.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
