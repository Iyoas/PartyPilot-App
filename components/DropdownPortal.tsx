// src/components/DropdownPortal.tsx
import React from 'react';
import ReactDOM from 'react-dom';

// Definieer een type voor de props van DropdownPortal
interface DropdownPortalProps {
  children: React.ReactNode; // React.ReactNode omvat alle mogelijke React-kinderen
}

const DropdownPortal: React.FC<DropdownPortalProps> = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

export default DropdownPortal;
