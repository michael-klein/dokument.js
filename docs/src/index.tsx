import 'react-app-polyfill/ie11';
import { docs, defaultComponentList } from '../../dist';
import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext/index.js';

const Code = ({ children, lang }) => {
  const language = lang ? lang.replace(/language-/, '') : 'javascript';
  return (
    <Highlight
      Prism={defaultProps.Prism}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

docs(document.querySelector('#docs-app') as HTMLElement, {
  title: '🗎 Dokument.js',
  mdxComponents: {
    Code: Code,
  },
  navbarPath: 'documents/',
  componentList: {
    Search: () => {
      return (
        <>
          <defaultComponentList.Search></defaultComponentList.Search>
          <div className="license">
            <img
              alt="GitHub"
              src="https://img.shields.io/github/license/michael-klein/dokument.js?color=%232580b3&style=flat-square"
            />
            <img
              alt="GitHub last commit"
              src="https://img.shields.io/github/last-commit/michael-klein/dokument.js?color=%232580b3&style=flat-square"
            ></img>
          </div>
        </>
      );
    },
  },
});
