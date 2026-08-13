function SkillCard({ title, items, Icon })   {
    return (
        <div className="skill-card">
            <Icon className="skill-icon" size={28} />
            <h3>{title}</h3>
            <p>{items.join(", ")}</p>
        </div>
    )
}
export default SkillCard