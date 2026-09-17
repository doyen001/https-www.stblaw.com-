import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <header id="cpw_page_header">
      <div className="hero-area-container">
        <div className="hero-area-content-outer">
          <div className="hero-area-content-middle">
            <div className="hero-area-content-inner">
              <div className="hero-area-image">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={820}
                  height={520}
                  style={{ height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="hero-area-copy-container">
            <div className="hero-area-copy">
              <div className="hero-area-location">
                <div className="divider-line" />
                <div className="hero-area-name">
                  <h1>{profile.name}</h1>
                </div>
                <div className="hero-area-title">{profile.title}</div>
                <div className="divider-line" />
                <div className="hero-area-address1">{profile.address1}</div>
                <div className="hero-area-address2">{profile.address2}</div>
              </div>

              <div className="hero-area-contact">
                <div className="divider-line" />
                <div className="hero-area-email">
                  <span className="hide-from-print">Email:</span>{" "}
                  <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
                </div>
                <div className="hero-area-phone">
                  Phone:{" "}
                  <Link href={`tel:${profile.phone}`} className="linked">
                    {profile.phone}
                  </Link>
                </div>
                <div className="hero-area-fax">Fax: {profile.fax}</div>

                <div className="hero-contact-vcard-btns">
                  <div className="btn-container btn-add-to-contact-list">
                    <Link href="#" className="addToContactList">
                      Add to Contact List
                    </Link>
                  </div>
                  <div className="btn-container btn-download-vcard">
                    <Link href="#">Download vCard</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right-bg-circles" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
