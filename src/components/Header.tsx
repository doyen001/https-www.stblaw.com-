"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuKey = "services" | "team" | "news" | "career" | "search";

const utilityNav = ["About Us", "Offices"];

const servicesColumns = [
  {
    heading: "Practices",
    links: [
      "Corporate",
      "Litigation",
      "Banking and Credit",
      "Capital Markets",
      "Capital Structure Solutions",
      "Mergers and Acquisitions",
      "Real Estate",
      "Private Funds",
    ],
    more: "See all practices",
  },
  {
    heading: "Industries",
    links: [
      "Data Centers",
      "Energy – Oil and Gas",
      "Energy – Power and Renewables",
      "Financial Services",
      "Healthcare and Life Sciences",
      "Infrastructure",
      "Insurance and Reinsurance",
      "Sports, Media and Entertainment",
      "Technology",
    ],
    more: "See all industries",
  },
  {
    heading: "Client Solutions",
    links: [
      "Artificial Intelligence",
      "Corporate Governance",
      "Crisis Management and Strategic Response",
      "Family Office",
      "Leveraged Finance",
      "National Security Regulatory Practice",
      "Privacy and Cybersecurity",
      "Private Equity Lifecycle",
      "Shareholder Activism",
      "Spin-offs",
      "Strategic Alternatives",
      "UP-C Structures",
    ],
    more: "See all solutions",
  },
];

const newsColumns = [
  {
    heading: "News & Events",
    links: [
      "Matter Highlights",
      "Press Releases",
      "Simpson Thacher in the News",
      "Firm and Individual Honors",
      "Events",
      "Speaking Engagements",
    ],
  },
  {
    heading: "Publications",
    links: [
      "Memos",
      "Articles",
      "Books",
      "Insurance Law Alerts",
      "PCAP Resource Center",
      "Registered Funds Resource Center",
      "Securities Law Alerts",
      "Sustainability and ESG Resource Center",
      "The Ad Standard",
    ],
  },
];

const careerColumns = [
  [
    "Careers at Simpson Thacher",
    "Summer Associate Recruitment",
    "Associate Life",
    "Summer Program",
    "Community & Opportunity",
    "Women’s Initiative at Simpson Thacher",
  ],
  [
    "Bay Area Careers",
    "Boston Office Careers",
    "Brussels Office Careers",
    "Houston Office Careers",
    "London Office Careers",
    "Los Angeles Office Careers",
    "Luxembourg Office Careers",
    "New York Office Careers",
    "Washington, D.C. Office Careers",
  ],
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  const toggleMenu = (menu: MenuKey) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header id="cpw_header" role="banner">
      <div
        className="top-nav-container"
        role="navigation"
        onMouseLeave={() => setOpenMenu(null)}
      >
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
                    <li>
                      <button
                        type="button"
                        className={openMenu === "services" ? "is-active" : ""}
                        aria-expanded={openMenu === "services"}
                        aria-controls="services-menu"
                        onClick={() => toggleMenu("services")}
                        onMouseEnter={() => setOpenMenu("services")}
                      >
                        Client Services
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className={openMenu === "team" ? "is-active" : ""}
                        aria-expanded={openMenu === "team"}
                        aria-controls="team-menu"
                        onClick={() => toggleMenu("team")}
                        onMouseEnter={() => setOpenMenu("team")}
                      >
                        Our Team
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className={openMenu === "news" ? "is-active" : ""}
                        aria-expanded={openMenu === "news"}
                        aria-controls="news-menu"
                        onClick={() => toggleMenu("news")}
                        onMouseEnter={() => setOpenMenu("news")}
                      >
                        News &amp; Insights
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className={openMenu === "career" ? "is-active" : ""}
                        aria-expanded={openMenu === "career"}
                        aria-controls="career-menu"
                        onClick={() => toggleMenu("career")}
                        onMouseEnter={() => setOpenMenu("career")}
                      >
                        Your Career
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className={`search-icon ${
                          openMenu === "search" ? "is-active" : ""
                        }`}
                        aria-label="Search"
                        aria-expanded={openMenu === "search"}
                        aria-controls="search-menu"
                        onClick={() => toggleMenu("search")}
                        onMouseEnter={() => setOpenMenu("search")}
                      />
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

        <div className={`mega-menu ${openMenu ? "is-open" : ""}`}>
          {openMenu === "services" && (
            <div id="services-menu" className="mega-menu-content menu-columns">
              {servicesColumns.map((column) => (
                <div className="menu-column" key={column.heading}>
                  <h2>{column.heading}</h2>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link href="#">{link}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link className="menu-more" href="#">
                    {column.more}
                  </Link>
                </div>
              ))}
            </div>
          )}

          {openMenu === "team" && (
            <div id="team-menu" className="mega-menu-content search-panel">
              <label htmlFor="lawyer-search">Who would you like to find?</label>
              <div className="menu-search-field">
                <input id="lawyer-search" type="search" />
                <button type="button" aria-label="Search lawyers" />
              </div>
              <div className="alphabet-links" aria-label="Browse by last name">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                  <Link key={letter} href="#">
                    {letter}
                  </Link>
                ))}
              </div>
              <div className="team-quick-links">
                <Link href="#">View all lawyers</Link>
                <Link href="#">View all administrative</Link>
                <Link href="#">Advanced Search</Link>
              </div>
            </div>
          )}

          {openMenu === "news" && (
            <div id="news-menu" className="mega-menu-content menu-columns">
              {newsColumns.map((column) => (
                <div className="menu-column" key={column.heading}>
                  <h2>{column.heading}</h2>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link href="#">{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {openMenu === "career" && (
            <div id="career-menu" className="mega-menu-content career-columns">
              {careerColumns.map((column, index) => (
                <ul key={index}>
                  {column.map((link) => (
                    <li key={link}>
                      <Link href="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}

          {openMenu === "search" && (
            <div id="search-menu" className="mega-menu-content search-panel site-search">
              <label htmlFor="site-search">How can we help you?</label>
              <div className="menu-search-field">
                <input id="site-search" type="search" />
                <button type="button" aria-label="Search site" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
