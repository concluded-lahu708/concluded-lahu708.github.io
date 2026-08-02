import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import Creators from "./components/Creators";
import ProjectLinks from "./components/ProjectLinks";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-400 via-accent-400 to-brand-400"
      />

      <Navbar />

      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <Creators />
        <ProjectLinks />
      </main>

      <Footer />
    </>
  );
}
