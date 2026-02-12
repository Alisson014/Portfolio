
import HeroBlackHole from "../components/heroBlackHole/HeroBlackHole";
import InitialHero from "../components/initialHero/InitialHero";
import TextSection from "../components/textSection/TextSection";
import SkillsSection from "../components/skillsSection/SkillsSection";
import FormationSection from "../components/formationSection/FormationSection";

import Image from "next/image";
import ProjectSection from "../components/projectsSection/ProjectSection";
import CuriositiesSection from "../components/curiositiesSection/CuriositiesSection";

export default function Home() {
    return (
        <main>
            <section className="bg-hero h-min overflow-hidden">
                <HeroBlackHole />
                <InitialHero />
            </section>
            
            <div className=" w-full flex justify-center -mt-12 sm:-mt-32">
              <Image className="translate-y-10" 
              src='/images/smile.png' alt="little person caracter" width={130} height={130}/>
            </div>
            <TextSection />
            <SkillsSection />
            <FormationSection />
            <ProjectSection />
            <CuriositiesSection />
            <br /><br /><br /><br />
        </main>
    );
}
