import { About } from "@/sections/about/About";
import { ClientStrip } from "@/sections/ClientStrip";
import { Contact } from "@/sections/contact/Contact";
import { FinalCta } from "@/sections/cta/FinalCta";
import { Faq } from "@/sections/faq/Faq";
import { Footer } from "@/sections/footer/Footer";
import { Hero } from "@/sections/hero/Hero";
import { Navbar } from "@/sections/Navbar";
import { Partners } from "@/sections/partners/Partners";
import { Process } from "@/sections/process/Process";
import { Services } from "@/sections/services/Services";
import { TechStack } from "@/sections/stack/TechStack";
import { Testimonials } from "@/sections/testimonials/Testimonials";
import { Work } from "@/sections/work/Work";

import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ClientStrip />
        {/* Suspense boundaries let React hydrate below-the-fold sections in smaller chunks. */}
        <Suspense>
          <Work />
        </Suspense>
        <Suspense>
          <Services />
        </Suspense>
        <Suspense>
          <About />
        </Suspense>
        <Suspense>
          <Process />
        </Suspense>
        <Partners />
        <TechStack />
        <Testimonials />
        <Suspense>
          <Faq />
        </Suspense>
        <Suspense>
          <Contact />
        </Suspense>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
