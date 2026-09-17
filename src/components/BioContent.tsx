import { getAdmissionsText, profile } from "@/data/profile";

export default function BioContent() {
  const admissionsText = getAdmissionsText();

  return (
    <div className="bio-2col-container-left">
      <div className="tabbed-content-container">
        <div className="tabbed-content-content">
          <div className="bio-left-column-section add-border">
            <div className="bio-left-column-section-headline">Education</div>
            <ul className="bio-left-column-section-list">
              {profile.education.map((item) => (
                <li key={item} className="bio-left-column-section-item">
                  {item}
                </li>
              ))}
            </ul>
            <div className="divider-line" />
          </div>

          <div className="bio-left-column-section add-border">
            <div className="bio-left-column-section-headline">Admissions</div>
            <ul className="bio-left-column-section-list">
              <li className="bio-left-column-section-item">{admissionsText}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
