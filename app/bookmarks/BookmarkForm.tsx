"use client";

import { useRef } from "react";

interface BookmarkFormProps {
  //서버 측에서 넘어올 액션 함수 타입 정의
  addBookmarkAction: (formData: FormData) => Promise<void>;
}

export default function BookmarkForm({ addBookmarkAction }: BookmarkFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        //서버 액션 실행
        await addBookmarkAction(formData);
        //성공 후 폼 초기화
        formRef.current?.reset();
      }}
      className="border-t pt-6"
    >
      <h3 className="text-lg font-semibold mb-3">새 북마크 추가</h3>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="사이트 이름(예: 구글)"
          required
          className="p-2 border rounded"
        />
        <input
          type="url"
          name="url"
          placeholder="URL (https://...)"
          required
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition font-medium"
        >
          추가하기
        </button>
      </div>
    </form>
  );
}
