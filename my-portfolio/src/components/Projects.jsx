import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section className="panel projects-section" id='projects'>
            <h2 className="project-title">Featured Projects</h2>
            <div className="projects-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                />
            ))}
        </div>
        </section>
    )
}
export default Projects