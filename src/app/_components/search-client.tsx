"use client";

import { useState } from "react";
import { PostPreview } from "@/app/_components/post-preview";
import SearchInput from "../_components/search-input";
import { Post } from "@/interfaces/post";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export default function SearchClient({ posts }: Props) {
  const [keyword, setKeyword] = useState("");

  const normalize = (str: string) => str.toLowerCase();

  const filtered = posts.filter((post) =>
    normalize(post.title + post.excerpt).includes(normalize(keyword))
  );

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-2 md:mb-5">
        <Link href="/">Post Search</Link>
      </h1>

      <SearchInput keyword={keyword} setKeyword={setKeyword} />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
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
      ) : (
        <div className="w-full flex justify-center mt-8">
          <p className="text-gray-500 font-bold text-xl md:text-2xl">
            검색 결과가 없습니다.
          </p>
        </div>
      )}
    </>
  );
}
