import AboutHero from "../components/about/AboutHero";
import BeyondCode from "../components/about/BeyondCode";
import CareerTimeline from "../components/about/CareerTimeline";
import EngineeringPhilosophy from "../components/about/EngineeringPhilosophy";
import JourneySection from "../components/about/JourneySection";
import TechnicalExpertise from "../components/about/TechnicalExpertise";
import LookingAhead from "../components/about/LookingAhead";

function About() {
    return (
        <main className="relative min-h-screen">
            <AboutHero />
            <JourneySection />
            <EngineeringPhilosophy />
            <TechnicalExpertise />
            <CareerTimeline />
            <BeyondCode />
            <LookingAhead/>
        </main>
    );
}

export default About;