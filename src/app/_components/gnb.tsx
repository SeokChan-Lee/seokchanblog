import CategoryList from "./category-list";

export default function Gnb() {
  return (
    <div className="flex-col flex gap-2 md:gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight ">
          SeokChan Blog.
        </h1>
        <h1>검색</h1>
      </div>
      <CategoryList />
    </div>
  );
}
