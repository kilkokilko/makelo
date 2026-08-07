import { Answers } from "@/components/site/answers";
import { Closing } from "@/components/site/closing";
import { Footer } from "@/components/site/footer";
import { GlassDeck } from "@/components/site/glass-deck";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Nav } from "@/components/site/nav";
import { NoAds } from "@/components/site/no-ads";
import { Platforms } from "@/components/site/platforms";
import { Pricing } from "@/components/site/pricing";
import { Problem } from "@/components/site/problem";
import { Process } from "@/components/site/process";
import { Reach } from "@/components/site/reach";
import { Report } from "@/components/site/report";
import { Services } from "@/components/site/services";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Platforms />
        <Services />
        <Report />
        <Answers />
        <GlassDeck />
        <NoAds />
        <Reach />
        <Process />
        <Pricing />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
