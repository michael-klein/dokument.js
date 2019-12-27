import * as React from 'react';
import { DocumentData } from '../../utils/document_interfaces';
import { useGetTo } from '../../hooks/use_to';
import { Link } from 'react-router-dom';
export interface PreviousAndNextProps {
  previous?: DocumentData;
  next?: DocumentData;
}
export function PreviousAndNext(props: PreviousAndNextProps): JSX.Element {
  const { previous, next } = props;
  const getTo = useGetTo();
  return (
    <div className="previous-next">
      {previous && (
        <div className="previous">
          <span>
            <Link to={getTo(previous)[0]}>{previous.title}</Link>
          </span>
        </div>
      )}
      {next && (
        <div className="next">
          <span>
            <Link to={getTo(next)[0]}>{next.title}</Link>
          </span>
        </div>
      )}
    </div>
  );
}
