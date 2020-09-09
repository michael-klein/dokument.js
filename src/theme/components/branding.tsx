import * as React from 'react';

export interface BrandingProps {
  children: React.ReactNode;
}
export function Branding(props: BrandingProps): JSX.Element {
  return <div className="branding">{props.children}</div>;
}
