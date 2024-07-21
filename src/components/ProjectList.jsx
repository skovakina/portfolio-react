import React, { useState, useLayoutEffect, useEffect, createRef } from 'react';
import usePrevious from './hooks/usePrevious';
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
      <AnimateList>
        {filteredProjects.map((item) => {
          return <ComponentToRender key={item.id} id={item.id} item={item} ref={createRef()} />;
        })}
      </AnimateList>
    </ul>
  );
};

const AnimateList = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child) => {
        const domNode = child.ref.current;
        if (!domNode) return;

        const firstBox = prevBoundingBox[child.key];
        const lastBox = boundingBox[child.key];
        if (!firstBox || !lastBox) return;

        const changeInY = firstBox.top - lastBox.top;
        console.log(firstBox.top);

        if (changeInY) {
          requestAnimationFrame(() => {
            // Before the DOM paints, invert child to old position
            domNode.style.transform = `translateY(${changeInY}px)`;
            domNode.style.transition = 'transform 0s';

            requestAnimationFrame(() => {
              // After the previous frame, remove
              // the transition to play the animation
              domNode.style.transform = '';
              domNode.style.transition = 'transform 500ms';
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
};

const calculateBoundingBoxes = (children) => {
  const boundingBoxes = {};

  React.Children.forEach(children, (child) => {
    const domNode = child.ref.current;
    if (!domNode) return;

    const nodeBoundingBox = domNode.getBoundingClientRect();
    boundingBoxes[child.key] = nodeBoundingBox;
  });

  return boundingBoxes;
};

export default ProjectList;
