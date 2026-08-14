import experiences from '../data/experiences'
import ExperienceCard from './ExperienceCard'

function Experience() {
    return (
        <section className="panel experience-section" id='experience'>
            <h2 className="experience-title">Experience</h2>
            <div className="experience-grid">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        id={experience.id}
                        role={experience.role}
                        company={experience.company}
                        location={experience.location}
                    />
                ))}
            </div>
        </section>
    )
}
export default Experience