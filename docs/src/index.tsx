import 'react-app-polyfill/ie11';
import { dokument, defaultComponentList } from '../../dist';
import * as React from 'react';
import * as Prism from 'prismjs';

dokument(document.querySelector('#docs-app') as HTMLElement, {
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
