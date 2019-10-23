import * as React from 'react';

export interface LastChangedProps {
  timestamp: number;
}
export function LastChanged(props: LastChangedProps): JSX.Element {
  return (
    <div className="last-changed">
      <div>last changed: </div>
      <div>{new Date(props.timestamp).toLocaleString()}</div>
    </div>
  );
}
