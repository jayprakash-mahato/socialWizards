import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-black text-primary/10 mb-4">404</div>
        <h1 className="text-3xl font-black text-primary mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
