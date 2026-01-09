
// Fix: Added missing React import to resolve the 'React' namespace error
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  accomplishments: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
