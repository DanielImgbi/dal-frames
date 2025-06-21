import Contact from "./contact";
import About from "./about";
import Awards from "./awards";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Partners from "./partners";
import Services from "./services";
import Testimonials from "./testimonials";
import Works from "./works";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Awards />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
      <Partners />
      <Footer />
    </main>
  )
}