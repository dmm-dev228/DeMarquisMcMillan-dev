import AboutHero from "../components/about/AboutHero";
import CareerTimeline from "../components/about/CareerTimeline";
import EngineeringPhilosophy from "../components/about/EngineeringPhilosophy";
import JourneySection from "../components/about/JourneySection";
import TechnicalExpertise from "../components/about/TechnicalExpertise";

function About() {
    return (
        <main className="relative min-h-screen">
            <AboutHero />
            <JourneySection />
            <EngineeringPhilosophy />
            <TechnicalExpertise />
            <CareerTimeline />
        </main>
    );
}

export default About;