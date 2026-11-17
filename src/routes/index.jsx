import { useState } from "react";
import { DEFAULT_SPECIALTIES, DEFAULT_TEAM } from "@/lib/siteData";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Specialties from "@/components/site/Specialties";
import Team from "@/components/site/Team";
import Gallery from "@/components/site/Gallery";
import WhyUs from "@/components/site/WhyUs";
import Steps from "@/components/site/Steps";
import Insurance from "@/components/site/Insurance";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import FamilyQuestions from "@/components/site/FamilyQuestions";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

export default function Home() {
  const specialties = DEFAULT_SPECIALTIES;
  const team = DEFAULT_TEAM;
  const [filter, setFilter] = useState("all");
  const seeTeam = (k) => { setFilter(k); document.getElementById("equipe")?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <div className="bg-[#FFFDF5]">
      <Header />
      <main>
        <Hero photoUrl="/images/hero.svg" />
        <About />
        <Specialties specialties={specialties} team={team} onSeeTeam={seeTeam} />
        <Team team={team} specialties={specialties} filter={filter} setFilter={setFilter} />
        <Gallery photos={[]} />
        <WhyUs />
        <Steps />
        <Insurance items={[]} />
        <TestimonialsSection items={[]} />
        <FamilyQuestions items={[]} />
        <Contact />
      </main>
      <Footer specialties={specialties} />
      <WhatsAppFloat />
    </div>
  );
}