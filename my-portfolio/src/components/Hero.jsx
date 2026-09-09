import Button from "./Button"
function Hero({title, subtitle, variant}) {
    return (
        <section className="panel hero-section" id="hero">
            <p className="eyebrow">{variant}</p>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <div className="hero-buttons">
                <a href=""  className="btn-link">Download Resume</a>
            </div>
        </section>
    )
}
export default Hero