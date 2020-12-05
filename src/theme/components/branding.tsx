import * as React from 'react';

export interface BrandingProps {
  children?: React.ReactNode;
}
export function Branding(): JSX.Element {
  return <span className="text-xl text-white">dokument.js</span>;
}
