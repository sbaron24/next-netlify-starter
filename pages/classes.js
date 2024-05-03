import Navigation from "@components/Navigation";
import PageSection from "@components/PageSection";
import headstand from "../public/headstand.png";
import virtualMeditation from "../public/virtual-meditation.png";
import virtualYoga from "../public/virtual-yoga.png";
import Head from "next/head";
import Footer from "@components/Footer";

export default function Classes() {
  return (
    <div className="container">
      <Head>
        <title>seanbaron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <PageSection
          src={headstand}
          sectionTitle={"Yoga in the Park"}
          imgWidth={400}
          timeInfo={"Find us in Fort Greene Park on Saturdays @ 10:00am."}
          eventInfo={
            "Bring a mat and 2 blocks.  This is an intermediate class and draws heavily from the primary series of the Ashtanga yoga lineage. An energetic, yet meditative flow, I'll invite you to find your edge while offering recovery as you need along the way."
          }
        />
        <PageSection
          imgLeft={false}
          src={virtualMeditation}
          sectionTitle={"Virtual Meditation"}
          imgWidth={400}
          timeInfo={
            "Join us for virtual meditations Tuesdays and Thursdays @ 10:20-10:50AM."
          }
          eventInfo={
            "From week-to-week we’ll practice concentration, open-awareness, and loving-kindness meditations as a way to restore your day with a sense of focus, poise, and goodwill towards everyone you interact with."
          }
        />
        <PageSection
          src={virtualYoga}
          sectionTitle={"Virtual Evening Yoga"}
          imgWidth={400}
          timeInfo={
            "Join us for virtual yoga classes Tuesdays and Thursdays @ 9:15-10:15AM."
          }
          eventInfo={
            "Bring a mat and 2 blocks.  This is a restorative, all-levels class, great for easing restlessness in the body and mind, aiding you to wind down for the evening."
          }
        />
      </main>
      <Footer />
    </div>
  );
}
