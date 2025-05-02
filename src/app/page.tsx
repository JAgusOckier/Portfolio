import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import SocialButtons from "@/components/UI/SocialButtons";
import ToggleTheme from "@/components/UI/ToggleTheme";

export default function Home() {
  return (
    <>
      <section id="about" className="relative">
        <About />
      <ToggleTheme/>
      <SocialButtons/>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="tech">
        <Technologies />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
