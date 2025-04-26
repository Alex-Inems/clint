// /app/success/page.tsx (if you're using Next.js App Router)
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank you for your donation!</h1>
      <p className="text-gray-700 mb-8 text-center">
        Your support helps provide relief to Gaza and Palestine refugees. We deeply appreciate your generosity.
      </p>
      <Link href="/" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
        Back to Home
      </Link>
    </div>
  );
}
