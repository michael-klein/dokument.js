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
    navbarPath: '/',
    rootPath: 'documents/',
    componentList: {},
  })
);
