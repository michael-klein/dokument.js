import * as React from 'react';

export interface BrandingProps {
  children: React.ReactNode;
}
export function Branding(props: BrandingProps): JSX.Element {
  return <h1>{props.children}</h1>;
}
