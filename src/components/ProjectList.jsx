import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import ProjectItemMobile from './ProjectItemMobile';
import data from '../utils/data';

const ProjectList = ({ selectedCategory, windowWidth }) => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectsData(data);
  }, []);

  const ComponentToRender = windowWidth > 500 ? ProjectItem : ProjectItemMobile;

  const filteredProjects = projectsData.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <ul className="project__list">
      {filteredProjects.map((item) => {
        return <ComponentToRender key={item._id} item={item} />;
      })}
    </ul>
  );
};

export default ProjectList;
