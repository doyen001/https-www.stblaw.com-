import Link from "next/link";
import { profile } from "@/data/profile";

export default function BioSidebar() {
  return (
    <div className="bio-2col-container-right">
      <div className="bio-right-column-section">
        <div className="divider-line right-content-first-divider" />
        <div className="bio-right-column-section-headline">Practice Focus</div>
        <div className="bio-right-column-tagged-items">
          <ul>
            {profile.practiceFocus.map((item) => (
              <li key={item}>
                <Link href="#" className="bio-right-tagged-item">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bio-right-column-section">
        <div className="divider-line" />
        <div className="bio-right-column-section-headline">Offices</div>
        <div className="bio-right-column-tagged-items">
          <ul>
            {profile.offices.map((item) => (
              <li key={item}>
                <Link href="#" className="bio-right-tagged-item">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
