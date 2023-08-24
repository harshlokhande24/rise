import Head from "next/head";
import Carousal from "../components/home/Carousal";
import Hero from "../components/home/Hero";
import WordFlick from '../components/common/WordFlick';
import About from "../components/home/About";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CoreTeam from "../components/home/CoreTeam";
import Sponsors from '../components/home/Sponsors';


export default function Home() {
  return (
    <>
      <Head>
        <title>Project RISE</title>
        <link rel="icon" href="/logo1.png" />
        {/* Meta Tags Dynamically generated */}
        <meta name="title" content="Project RISE" />
        <meta
          name="description"
          content="Empowering the minds of slum."
        />
        <meta name="copyright" content="Team Webmasters!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        <meta property="og:title" content="#" />
        <meta
          property="og:description"
          content="Empowering the minds of slum."
        />
        <meta property="og:image" content="#" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="#" />
        <meta property="twitter:title" content="#" />
        <meta
          property="twitter:description"
          content="Empowering the minds of slum."
        />
        <meta property="twitter:image" content="#" />
      </Head>

      <main className="">
        <Navbar />
        <Hero />
        <WordFlick />
        <Carousal />
        <About />
        <Sponsors />
        <CoreTeam />
      </main>

      <Footer />
    </>
  );
}
