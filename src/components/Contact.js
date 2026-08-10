// src/components/Contact.js
// Email and LinkedIn only. No form, no phone number.

import React from 'react';
import Reveal from './Reveal';
import { contact, identity } from '../data/content';
import './Contact.css';

const Contact = () => (
  <Reveal className="contact">
    <h3 className="contact__heading">{contact.heading}</h3>
    <p className="contact__body">{contact.body}</p>

    <ul className="contact__list">
      {contact.links.map((link) => (
        <li className="contact__item" key={link.label}>
          <span className="contact__label u-mono">{link.label}</span>
          <a
            className="contact__value"
            href={link.href}
            {...(link.href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {link.value}
          </a>
        </li>
      ))}
      <li className="contact__item">
        <span className="contact__label u-mono">Location</span>
        <span className="contact__value contact__value--plain">
          {identity.location}. {identity.relocation}.
        </span>
      </li>
    </ul>
  </Reveal>
);

export default Contact;
