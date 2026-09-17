import Image from "next/image";
import Link from "next/link";

const primaryNav = [
  "Client Services",
  "Our Team",
  "News & Insights",
  "Your Career",
];

const utilityNav = ["About Us", "Offices"];

export default function Header() {
  return (
    <header id="cpw_header" role="banner">
      <div className="top-nav-container" role="navigation">
        <div className="top-nav-desktop">
          <div className="top-nav-desktop-wrapper">
            <div className="top-nav-desktop-outer">
              <div className="top-nav-desktop-inner container">
                <div className="top-nav-items nav-items-logo">
                  <Link href="/" aria-label="Home" title="STB Law" rel="home">
                    <Image
                      src="/images/logo.png"
                      alt="STB Law home"
                      width={180}
                      height={45}
                      style={{ height: "auto" }}
                      priority
                    />
                  </Link>
                </div>

                <div className="top-nav-items nav-items-1">
                  <ul className="top-nav-links">
                    {primaryNav.map((item) => (
                      <li key={item}>
                        <Link href="#">{item}</Link>
                      </li>
                    ))}
                    <li>
                      <Link href="#" className="search-icon" aria-label="Search">
                        Search
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="top-nav-items nav-items-contact-list">
                  <div className="top-nav-map-btn">
                    <Link href="#" aria-label="Link to display language listing">
                      <Image
                        src="/images/top-nav-map-icon.png"
                        alt="map icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  <div className="btn-container btn-contact-list">
                    <Link href="#" className="btnContactList">
                      Contact List (<span>0</span>)
                    </Link>
                  </div>
                </div>

                <div className="top-nav-items nav-items-2">
                  <ul className="top-nav-links">
                    {utilityNav.map((item) => (
                      <li key={item}>
                        <Link href="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
