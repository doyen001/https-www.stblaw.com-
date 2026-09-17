const footerLinks = [
  { label: "Contact Us", href: "#" },
  { label: "Subscribe", href: "#", external: true },
  { label: "Site Map", href: "#" },
  { label: "Extranets", href: "#" },
  { label: "Disclaimers", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "LLP Info", href: "#" },
  { label: "Directory", href: "#" },
];

const languages = [
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Japanese",
  "Portuguese",
  "Spanish",
];

export default function Footer() {
  return (
    <section id="FooterWrapper" role="contentinfo">
      <footer id="cpw_footer" className="container" role="contentinfo">
        <div className="footer-logo">Simpson Thacher &amp; Bartlett LLP</div>

        <div className="footer-columns">
          <div className="footer-utilities">
            <ul className="footer-nav">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-languages">
            <ul className="footer-nav">
              <li className="footer-lang-label">Local Language Pages:</li>
              {languages.map((lang) => (
                <li key={lang}>
                  <a href="#">{lang}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
}
