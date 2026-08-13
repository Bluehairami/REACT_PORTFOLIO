import { Code2, Server, Database } from "lucide-react";
import skills from "../data/skills";
import SkillCard from "./SkillCard";

const icons = {
    Frontend: Code2,
    Backend: Server,
    Database: Database
};
// PARENT COMPONENT
function Skills() {
    return (
        <section className="panel skills-section" id="skills">
            <div className="skills-grid">
{/* map goes through each skills one by one */}
{/* For every object inside skills, call it skill and do something with it. */}
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        title={skill.title}
                        items={skill.items}
                        Icon={icons[skill.title]}
                    />
// title and items are props that are passed to the SkillCard component. 
// The SkillCard component will receive these props and use them to display the title and items of each skill.    
                ))}
            </div>
        </section>
    )}
    export default Skills