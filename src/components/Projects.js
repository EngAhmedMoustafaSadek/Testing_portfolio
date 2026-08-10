// src/components/Projects.js
// On the home page the list is filterable. The filter is a tablist with a
// roving tabindex, so arrow keys move between filters and Tab leaves the group.

import React, { useMemo, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects as allProjects, projectFilters } from '../data/projects';
import './Projects.css';

const Projects = ({ items, filterable = false }) => {
  const [active, setActive] = useState('all');
  const tabRefs = useRef([]);

  const visible = useMemo(() => {
    if (!filterable) return items;
    return active === 'all'
      ? allProjects
      : allProjects.filter((project) => project.track === active);
  }, [filterable, items, active]);

  const onKeyDown = (event, index) => {
    const lastIndex = projectFilters.length - 1;
    let next = null;

    if (event.key === 'ArrowRight') next = index === lastIndex ? 0 : index + 1;
    if (event.key === 'ArrowLeft') next = index === 0 ? lastIndex : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = lastIndex;
    if (next === null) return;

    event.preventDefault();
    setActive(projectFilters[next].id);
    tabRefs.current[next]?.focus();
  };

  const activeIndex = projectFilters.findIndex((item) => item.id === active);

  return (
    <>
      {filterable ? (
        <div
          className="filter"
          role="tablist"
          aria-label="Filter projects by track"
        >
          {projectFilters.map((filter, index) => {
            const isActive = filter.id === active;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                id={`filter-${filter.id}`}
                aria-selected={isActive}
                aria-controls="project-list"
                tabIndex={isActive ? 0 : -1}
                className={`filter__btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActive(filter.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {/* The panel wraps the list rather than replacing its role, so the
          list semantics and the tabpanel semantics both survive. It takes
          tabIndex 0 because the cards contain nothing focusable. */}
      <div
        id="project-list"
        {...(filterable
          ? {
              role: 'tabpanel',
              tabIndex: 0,
              'aria-labelledby': `filter-${projectFilters[activeIndex]?.id}`,
            }
          : {})}
      >
        <ul className="projects">
          {visible.map((project, index) => (
            <li key={project.id}>
              <ProjectCard project={project} delay={index * 70} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
