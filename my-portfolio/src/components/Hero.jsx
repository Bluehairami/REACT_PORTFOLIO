import Button from "./Button"
function Hero({title, subtitle, variant}) {
    return (
        <section className="panel hero-section" id="about">
            <p className="eyebrow">{variant}</p>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <div className="hero-buttons">
                <Button label="View projects"/>
                <Button label="Download Resume"/>
            </div>
        </section>
    )
}
export default Hero