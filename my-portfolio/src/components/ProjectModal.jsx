import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
 
function ProjectModal({ title, videoUrl, screenshots = [], architecture = [], onClose }) {
    const [activeShot, setActiveShot] = useState(0)
 
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [onClose])
 
    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{title} — Demo Walkthrough</h3>
                    <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
                </div>
 
                {videoUrl && (
                    <div className="modal-video">
                        <iframe
                            src={videoUrl}
                            title={`${title} demo video`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                )}
 
                {screenshots.length > 0 && (
                    <div className="modal-gallery">
                        <img src={screenshots[activeShot].src} alt={screenshots[activeShot].caption} />
                        <p className="gallery-caption">{screenshots[activeShot].caption}</p>
 
                        {screenshots.length > 1 && (
                            <div className="gallery-thumbs">
                                {screenshots.map((shot, i) => (
                                    <button
                                        key={shot.src}
                                        className={`gallery-thumb ${i === activeShot ? 'active' : ''}`}
                                        onClick={() => setActiveShot(i)}
                                    >
                                        <img src={shot.src} alt="" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                {architecture.length > 0 && (
                    <div className="modal-architecture">
                        <h4>How it works</h4>
                        {architecture.map((layer) => (
                            <div key={layer.layer} className="architecture-row">
                                <span className="architecture-label">{layer.layer}</span>
                                <ul>
                                    {layer.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>,
        document.body
    )
}
 
export default ProjectModal
 
