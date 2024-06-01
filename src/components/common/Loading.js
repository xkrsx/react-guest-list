import './Loading.scss';
import React from 'react';

export default function Loading({ children }) {
  return (
    <div className="Loading">
      <div className="Spinner" />
      <h2>{children}</h2>
    </div>
  );
}
