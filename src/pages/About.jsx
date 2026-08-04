import AboutHero from "../components/about/AboutHero";
import EngineeringPhilosophy from "../components/about/EngineeringPhilosophy";
import JourneySection from "../components/about/JourneySection";

function About() {
    return (
        <main className="relative min-h-screen">
            <AboutHero />
            <JourneySection />
            <EngineeringPhilosophy />
        </main>
    );
}

export default About;