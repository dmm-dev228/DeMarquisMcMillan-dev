import BalancingResponsibilities from "../components/experience/BalancingResponsibilities";
import ExperienceHero from "../components/experience/ExperienceHero";
import TechnicalExperience from "../components/experience/TechnicalExperience";
import WalmartExperience from "../components/experience/WalmartExperience";

function Experience() {
    return (
        <main className="relative min-h-screen">
            <ExperienceHero />
            <WalmartExperience />
            <BalancingResponsibilities />
            <TechnicalExperience />
        </main>
    );
}

export default Experience;