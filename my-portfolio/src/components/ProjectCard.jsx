import { useState } from 'react';
import ProjectModal from './ProjectModalTemp';

function ProjectCard({ title, problem, role, decision, result, stack, demoUrl, repoUrl, videoUrl, screenshots, architecture }) {
    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const hasMedia = videoUrl || (screenshots && screenshots.length > 0);

    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p className="project-problem">{problem}</p>

            {expanded && (
                <>
                    <p><strong>Role:</strong> {role}</p>
                    <p><strong>Decision:</strong> {decision}</p>
                </>
            )}

            <p className="project-result"><strong>Result:</strong> {result}</p>

            <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Show less' : 'Read more'}
            </button>

            <div className="stack-tags">
                {stack.map((tech) => (
                    <span key={tech} className="stack-tag">{tech}</span>
                ))}
            </div>

            <div className="project-links">
                {hasMedia && (
                    <button className="watch-demo-btn" onClick={() => setShowModal(true)}>Watch Demo</button>
                )}
                {demoUrl && <a href={demoUrl} target="_blank" rel="noreferrer">Live Demo</a>}
                {repoUrl && <a href={repoUrl} target="_blank" rel="noreferrer">GitHub</a>}
                {!demoUrl && !repoUrl && !hasMedia && <span className="private-note">Private repo — details on request</span>}
                {!demoUrl && !repoUrl && hasMedia && <span className="private-note">Internal system — private repo</span>}
            </div>

            {showModal && (
                <ProjectModal
                    title={title}
                    videoUrl={videoUrl}
                    screenshots={screenshots}
                    architecture={architecture}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default ProjectCard;