import Link from "next/link";
import { profile } from "@/data/profile";

export default function Breadcrumb() {
  return (
    <aside id="BreadcrumbWrapper" aria-label="Breadcrumb Navigation" className="breadcrumbWrapper">
      <div className="container">
        <div className="sfBreadcrumbWrp">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ul className="breadcrumb-list">
              <li>
                <Link href="/" className="ourTeamBreadcrumb">
                  Home
                </Link>
                <span className="breadcrumb-separator">&gt;</span>
              </li>
              <li>
                <Link href="#" className="ourTeamBreadcrumb">
                  Our Team
                </Link>
                <span className="breadcrumb-separator">&gt;</span>
              </li>
              <li>
                <Link href="#" className="ourTeamBreadcrumb">
                  {profile.name}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
