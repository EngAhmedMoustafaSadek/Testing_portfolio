// src/components/Experience.js

import React from 'react';
import Reveal from './Reveal';
import './Experience.css';

const Experience = ({ roles }) => (
  <ol className="roles">
    {roles.map((role, index) => (
      <Reveal as="li" className="role" key={role.id} delay={index * 80}>
        <div className="role__meta">
          <p className="role__period u-mono">{role.period}</p>
          <p className="role__location u-mono">{role.location}</p>
        </div>

        <div className="role__body">
          <h3 className="role__title">{role.title}</h3>
          <p className="role__company">{role.company}</p>

          {role.clients.length > 0 ? (
            <div className="role__clients">
              <p className="u-mono role__clients-label">Clients</p>
              <ul className="role__clients-list">
                {role.clients.map((client) => (
                  <li className="tag" key={client}>
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <ul className="role__achievements">
            {role.achievements.map((item) => (
              <li key={item.id}>
                {item.client ? (
                  <span className="role__client u-mono">{item.client}</span>
                ) : null}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    ))}
  </ol>
);

export default Experience;
