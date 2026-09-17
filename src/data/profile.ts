export const profile = {
  name: "William Bartlett",
  title: "Associate",
  address1: "425 Lexington Avenue",
  address2: "New York, NY 10017",
  email: "william.bartlett@stblaw.com",
  phone: "+1-212-455-7064",
  fax: "+1-212-455-2502",
  image: "/images/williambartlett_nyh_5630_bw_web.jpg",
  education: [
    "Columbia Law School, 2025 J.D.",
    "Georgetown University, 2022 B.A.",
  ],
  practiceFocus: ["Corporate", "Investment Funds", "Private Funds"],
  offices: ["New York"],
};

export function getAdmissionsText(): string {
  return (
    process.env.NEXT_PUBLIC_ADMISSIONS_TEXT ?? "*Not Admitted in New York"
  );
}
