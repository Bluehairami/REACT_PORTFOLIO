import Button from "./Button"
function Hero({title, subtitle, variant}) {
    return (
        <section className="panel hero-section" id="hero">
            <p className="eyebrow">{variant}</p>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <div className="hero-buttons">
                <a href="https://drive.google.com/file/d/1htDt2bBJXu3XYAsJqazFSrQfsQQIIEro/view?usp=drive_link"  className="btn-link">Download Resume</a>
            </div>
        </section>
    )
}
export default Hero