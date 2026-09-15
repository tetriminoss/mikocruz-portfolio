import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t hairline py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-text-dim sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top" className="hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
