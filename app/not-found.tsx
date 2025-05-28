import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <div className="mb-6">
        {/* Simple illustration */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="38" stroke="#E5E7EB" strokeWidth="4" />
          <path
            d="M28 50c2-4 8-4 12-4s10 0 12 4"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="32" cy="36" r="3" fill="#9CA3AF" />
          <circle cx="48" cy="36" r="3" fill="#9CA3AF" />
        </svg>
      </div>
      <h1 className="font-bold text-3xl mb-4 tracking-tight">
        Oh no! This page doesn&apos;t exist.
      </h1>
      <p className="mb-2 text-lg text-gray-700">
        We couldn&apos;t find the page you were looking for.
        <br />
        It might have been moved, deleted, or you may have mistyped the address.
      </p>
      <p className="mb-6 text-gray-500">
        If you expected to see something here, let us know at{" "}
        <a
          href="mailto:info@onebridgekspan.com"
          className="underline text-blue-600"
        >
          info@onebridgekspan.com
        </a>
        .
      </p>
      <Link href="/">
        <span className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go to Homepage
        </span>
      </Link>
    </section>
  );
}
