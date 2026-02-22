export default function Footer() {
  return (
    <footer className="bg-laf-void border-t border-laf-steel/10 py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-light text-laf-offwhite tracking-widest mb-4">
              LOST<br />
              <span className="text-laf-zinc">and</span><br />
              FOUND
            </div>
            <p className="font-mono text-[10px] tracking-wider text-laf-steel leading-relaxed max-w-xs">
              도심의 일상에 원래 있던 것처럼.<br />
              Always been there.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[9px] tracking-superwide text-laf-zinc mb-6">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {["COLLECTION", "BRAND STORY", "LOOKBOOK", "WAITLIST"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-mono text-[11px] tracking-wider text-laf-steel hover:text-laf-ash transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[9px] tracking-superwide text-laf-zinc mb-6">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@lostandfound.kr"
                  className="font-mono text-[11px] tracking-wider text-laf-steel hover:text-laf-ash transition-colors duration-200"
                >
                  hello@lostandfound.kr
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mono text-[11px] tracking-wider text-laf-steel hover:text-laf-ash transition-colors duration-200"
                >
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-laf-steel/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[9px] tracking-wider text-laf-iron">
            © 2025 LOST and FOUND. ALL ITEMS RESERVED.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-mono text-[9px] tracking-wider text-laf-iron hover:text-laf-ash transition-colors duration-200"
            >
              PRIVACY
            </a>
            <a
              href="#"
              className="font-mono text-[9px] tracking-wider text-laf-iron hover:text-laf-ash transition-colors duration-200"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
