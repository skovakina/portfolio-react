import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ item }) => {
  return (
    <li className="project-item">
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

        <div className="project-item__date">{item.date}</div>

        <p className="project-item__description">{item.description}</p>
        <ul className="project-item__links">
          {item.github && (
            <li>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                Github
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
          {item.deploy && (
            <li>
              <a href={item.deploy} className="project-item__link-online" target="_blank" rel="noopener noreferrer">
                Online
              </a>
            </li>
          )}
        </ul>
        {/* Uncomment and use React Router Link if needed
        <Link to={`/project/${item.id}`} className="project-item__read-more">
          Read more...
        </Link>
        */}
      </div>
    </li>
  );
};

ProjectItem.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string,
    figma: PropTypes.string,
    deploy: PropTypes.string,
  }).isRequired,
};

export default ProjectItem;
