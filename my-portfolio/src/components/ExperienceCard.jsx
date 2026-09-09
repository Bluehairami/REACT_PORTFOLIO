function ExperienceCard({id,role,company,location, duration}){
    return (
        <div className="experience-card">
            <h3>{role}</h3>
            <p>
                {company}
                {/*tech.join(' · ') turns the array ["React", "Node.js"] into the string "React · Node.js" — a plain JS array method, nothing React-specific  */}
            </p>
            <p>
                {location}
            </p>
               <p>
                {duration}
            </p>
        </div>
    )
}
export default ExperienceCard