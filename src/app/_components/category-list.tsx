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
      <ul className="flex text-lg mb-4 md:mb-10 gap-5 md:text-2xl ">
        {categories.map((category) => (
          <li key={category} className="hover:text-blue-200">
            <Link href={`/category/${category}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
