// src/components/Reveal.js
// Wraps children in the single site-wide reveal animation.

import React from 'react';
import useReveal from '../hooks/useReveal';

const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) => {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
