import 'react-app-polyfill/ie11';
import { dokument, defaultComponentList } from '../../src/index';
import * as React from 'react';
import * as Prism from 'prismjs';

function docReady(fn) {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
docReady(() =>
  dokument(document.body as HTMLElement, {
    title: 'Dokument.js',
    htmdxOptions: {
      configureMarked: marked =>
        marked.setOptions({
          highlight: function(code) {
            return Prism.highlight(
              code,
              Prism.languages.javascript,
              'javascript'
            ).replace(/\n/g, '<br/>');
          },
        }),
    },
    navbarPath: 'documents/',
    componentList: {
      Branding: ({ children }) => {
        return (
          <div className="branding">
            {children}
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
          </div>
        );
      },
    },
  })
);
