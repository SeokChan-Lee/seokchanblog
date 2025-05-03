type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
};

export default function SearchInput({ keyword, setKeyword }: Props) {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="검색어를 입력하세요"
      className="w-full border px-4 py-2 rounded-md text-lg outline-none focus:outline-blue-500 "
    />
  );
}
