import Link from "next/link";

const SHOP_URL = "https://litt.ly/lostandfound";
const INSTAGRAM_URL = "https://www.instagram.com/_lost_and_found_2023/";

export default function Footer() {
  return (
    <footer className="bg-laf-void border-t border-laf-steel/10 py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-light text-laf-offwhite tracking-widest mb-4">
              LOST<br />
              <span className="text-laf-silver">and</span><br />
              FOUND
            </div>
            <p className="font-mono text-[10px] tracking-wider text-laf-zinc leading-relaxed max-w-xs">
              마치 원래 내 것이었던 듯이.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[9px] tracking-superwide text-laf-silver mb-6">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {[
                { label: "COLLECTION", href: "#collection" },
                { label: "BRAND STORY", href: "#story" },
                { label: "LOOKBOOK", href: "#lookbook" },
                { label: "WAITLIST", href: "#waitlist" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-mono text-[11px] tracking-wider text-laf-zinc hover:text-laf-offwhite transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Shop */}
          <div>
            <h4 className="font-mono text-[9px] tracking-superwide text-laf-silver mb-6">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@lostandfound.kr"
                  className="font-mono text-[11px] tracking-wider text-laf-zinc hover:text-laf-offwhite transition-colors duration-200"
                >
                  hello@lostandfound.kr
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-wider text-laf-zinc hover:text-laf-offwhite transition-colors duration-200"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-wider text-laf-zinc hover:text-laf-offwhite transition-colors duration-200"
                >
                  ONLINE STORE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-laf-steel/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[9px] tracking-wider text-laf-ash">
            © 2025 LOST and FOUND. ALL ITEMS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-mono text-[9px] tracking-wider text-laf-ash hover:text-laf-offwhite transition-colors duration-200"
            >
              PRIVACY
            </Link>
            <Link
              href="/terms"
              className="font-mono text-[9px] tracking-wider text-laf-ash hover:text-laf-offwhite transition-colors duration-200"
            >
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
