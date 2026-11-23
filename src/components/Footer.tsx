import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 py-8 text-center text-sm text-white/60">
      <div className="container-page">
        <p>© 2026 {profile.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
