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
  title: 'Dokument.js',
  mdxComponents: {
    pre: props => {
      console.log(props);
      if (
        props.children &&
        props.children.props &&
        props.children.props.mdxType &&
        props.children.props.mdxType === 'code'
      ) {
        return <>{props.children}</>;
      } else {
        return <pre>{props.children}</pre>;
      }
    },
    code: props => {
      const language = props.className
        ? props.className.replace(/language-/, '')
        : 'typescript';
      return (
        <Highlight
          Prism={defaultProps.Prism}
          code={props.children}
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
    },
  },
  navbarPath: 'documents/',
  componentList: {
    Branding: ({ children }) => {
      return (
        <div className="branding">
          <h1>
            <i className="ri-article-line"></i>
            {children}
          </h1>
        </div>
      );
    },
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
