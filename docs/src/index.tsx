import 'react-app-polyfill/ie11';
import { docs } from '../../dist';
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
    Code: Code,
  },
  navbarPath: 'documents/',
});
