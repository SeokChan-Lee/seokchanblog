import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default function CategoryList() {
  const posts = getAllPosts();
  const categories = Array.from(
    new Set(
      posts
        .map((post) => post.category?.toLowerCase())
        .filter((category): category is string => Boolean(category))
    )
  );

  return (
    <div className="">
      <h1 className="font-bold text-3xl mb-3">Category</h1>
      <ul className="flex text-2xl mb-8 md:mb-6 gap-5">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
