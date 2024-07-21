import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ProjectItem = forwardRef(({ item }, ref) => (
  <li className="project-item" ref={ref}>
    <img className="project-item__image" src={item.imgUrl} alt={item.title} />

    <div className="project-item__body">
      <h3 className="project-item__title">{item.title}</h3>
      <ul className="project-item__tech-list">
        {item.tech.map((tech) => (
          <li key={tech} className="project-item__tech-item">
            {tech}
          </li>
        ))}
      </ul>
      <p className="project-item__description">{item.description}</p>
      <ul className="project-item__links">
        {item.github && (
          <li>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
        )}
        {item.deploy && (
          <li>
            <a href={item.deploy} target="_blank" rel="noopener noreferrer">
              Online
            </a>
          </li>
        )}
        {item.figma && (
          <li>
            <a href={item.figma} target="_blank" rel="noopener noreferrer">
              Figma
            </a>
          </li>
        )}
      </ul>
    </div>

    <div className="project-item__about">
      <div className="project__date">{item.date}</div>
      <div className="project__type">{item.role}</div>
    </div>
  </li>
));

ProjectItem.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string,
    deploy: PropTypes.string,
    figma: PropTypes.string,
    date: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
