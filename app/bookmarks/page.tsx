import { revalidatePath } from "next/cache";
import BookmarkForm from "./BookmarkForm";

const globalBookmarks = [
  { id: 1, title: "Next.js 공식 문서", url: "https://nextjs.org" },
  { id: 2, title: "Tailwind CSS 핵심 정리", url: "https://tailwindcss.com" },
];

export default async function BookmarksPage() {
  //server action!!
  async function addBookmark(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const url = formData.get("url") as string;

    if (!title || !url) return;

    //add data
    globalBookmarks.push({
      id: Date.now(),
      title,
      url,
    });

    //이 주소의 캐시를 갱신하고 화면 다시 그리라고 명령
    revalidatePath("/bookmarks");
  }

  return (
    <main className="p-8 max-w-xl mx-auto bg-white mt-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        🔖 저장된 북마크 game over
      </h1>

      <ul className="space-y-3 mb-8">
        {globalBookmarks.map((bookmark) => (
          <li
            key={bookmark.id}
            className="p-3 border rounded hover:bg-gray-50 transition"
          >
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noregerrer"
              className="text-blue-600 font-medium hover:underline blcok"
            >
              {bookmark.title}
            </a>
            <span className="text-xs text-gray-400">{bookmark.url}</span>
          </li>
        ))}
      </ul>
      <BookmarkForm addBookmarkAction={addBookmark} />
    </main>
  );
}
