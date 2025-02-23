"use client";

import GetInTouch from "../GetInTouch";

import PageHeroSection from "../ui/PageHeroSection";

const ContactPageUI = () => {
  return (
    <main className="  font-montserrat ">
      <PageHeroSection title="CONTACT US" bg={`bg-contact-hero-bg`} />

      <GetInTouch />
    </main>
  );
};

export default ContactPageUI;
