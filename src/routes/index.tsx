import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Sangay Wangchen — Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sangay Wangchen — Full Stack Developer & AI Engineer crafting fast, intelligent web experiences and AI-powered products.",
      },
      { property: "og:title", content: "Sangay Wangchen — Full Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content: "Premium portfolio: web development, AI engineering, and product design.",
      },
      { property: "og:image", content: logo },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", href: logo },
      { rel: "apple-touch-icon", href: logo },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
