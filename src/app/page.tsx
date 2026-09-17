import type { Metadata } from "next";
import BioContent from "@/components/BioContent";
import BioSidebar from "@/components/BioSidebar";
import Breadcrumb from "@/components/Breadcrumb";
import EmailFloatButton from "@/components/EmailFloatButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: profile.name,
  description: `${profile.name} — ${profile.title} at Simpson Thacher & Bartlett LLP`,
};

export default function Home() {
  return (
    <div id="PublicWrapper">
      <section id="HeaderWrapper" role="banner">
        <div id="cpw_headerwrapper">
          <Header />
        </div>
      </section>

      <div id="MainWrapper" role="main">
        <article id="cpw_main" role="main">
          <Hero />
          <Breadcrumb />

          <section id="MainContentWrapper" className="main-content">
            <EmailFloatButton />
            <div className="container">
              <BioContent />
              <BioSidebar />
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
}
