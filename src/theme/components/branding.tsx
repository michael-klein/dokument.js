import * as React from 'react';

export function Branding(props: { children: React.ReactNode }): JSX.Element {
  return <h1>{props.children}</h1>;
}
