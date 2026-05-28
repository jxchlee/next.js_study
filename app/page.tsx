import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold md-6">my bookmark app</h1>
      <p className="md-4">
        최신 Next.js App Router로 만드는 미니 프로젝트입니다.
      </p>

      <Link
        href="/bookmarks"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        북마크 목록 보러가기 →
      </Link>
    </main>
  );
}
