function ProjectCard({ title, description, tech }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
                {tech.join(', ')}
                {/*tech.join(' · ') turns the array ["React", "Node.js"] into the string "React · Node.js" — a plain JS array method, nothing React-specific  */}
            </p>
        </div>
    )
}
export default ProjectCard