import './styles/style.css';
import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { HashRouter } from 'react-router-dom';
export const Docs = () => {
  const { componentList } = useDocContext();
  const { Header } = componentList;
  return (
    <HashRouter>
      <Header />
    </HashRouter>
  );
};
