import { useState, createElement, Fragment, createContext, useContext, useEffect, isValidElement, Suspense, useRef, useLayoutEffect } from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { createStore, useStoreState } from 'forimmer';
import Fuse from 'fuse.js';
import ky from 'ky';
import { htmdx } from 'htmdx';
import { Link, useLocation } from 'react-router-dom';
import innerText from 'react-innertext';
import scrollIntoView from 'scroll-into-view';
import { Switch, Route, useParams } from 'react-router';
import removeMarkdown from 'remove-markdown';
import Highlighter from 'react-highlight-words';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Header = Layout.Header,
    Sider = Layout.Sider,
    Content = Layout.Content;
var Docs = function Docs() {
  var _React$useState = useState(false),
      collapsed = _React$useState[0],
      setCollapsed = _React$useState[1];

  return createElement(Fragment, null, createElement(Layout, null, createElement(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed
  }, createElement("div", {
    className: "logo"
  }, "Docs"), createElement(Menu, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['1']
  }, createElement(Menu.Item, {
    key: "1",
    icon: createElement(UserOutlined, null)
  }, "nav 1"), createElement(Menu.Item, {
    key: "2",
    icon: createElement(VideoCameraOutlined, null)
  }, "nav 2"), createElement(Menu.Item, {
    key: "3",
    icon: createElement(UploadOutlined, null)
  }, "nav 3"))), createElement(Layout, {
    className: "site-layout"
  }, createElement(Header, {
    className: "site-layout-background",
    style: {
      padding: 0
    }
  }, createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: 'trigger',
    onClick: function onClick() {
      return setCollapsed(function (c) {
        return !c;
      });
    }
  })), createElement(Content, {
    className: "site-layout-background",
    style: {
      margin: '24px 16px',
      padding: 24,
      minHeight: 280
    }
  }, "Content"))));
};

var dokumentStore =
/*#__PURE__*/
createStore({
  documentMap: {},
  allDocumentsLoaded: false
});
var setNavBar =
/*#__PURE__*/
dokumentStore.createStoreAction(function (navbar) {
  return Promise.resolve(function (draft) {
    draft.navbar = navbar;
  });
});
var setCurrentDocument =
/*#__PURE__*/
dokumentStore.createStoreAction(function (currentDocument) {
  return Promise.resolve(function (draft) {
    draft.currentDocument = currentDocument;
  });
});
var addDocument =
/*#__PURE__*/
dokumentStore.createStoreAction(function (document) {
  return Promise.resolve(function (draft) {
    draft.documentMap[document.slug] = document;
  });
});
var setDocumentsLoaded =
/*#__PURE__*/
dokumentStore.createStoreAction(function () {
  return Promise.resolve(function (draft) {
    draft.allDocumentsLoaded = true;
  });
});

var fuse =
/*#__PURE__*/
new Fuse([], {
  includeScore: true,
  keys: ['content'],
  minMatchCharLength: 3,
  ignoreLocation: true
});
var docMap;
dokumentStore.subscribe(function (model) {
  if (model.documentMap !== docMap) {
    docMap = model.documentMap;
    fuse.setCollection(Object.keys(docMap).flatMap(function (key) {
      var doc = docMap[key];
      console.log(doc);
      return doc.content.split("\n").map(function (content) {
        return {
          content: content,
          slug: doc.slug
        };
      });
    }));
  }
});
function search(query) {
  var results = {};
  return fuse.search(query).reduce(function (memo, result) {
    var r = results[result.item.slug] || {
      score: 0,
      slug: result.item.slug
    };
    results[result.item.slug] = r;
    r.score += result.score;

    if (!memo.includes(r) && result.score < 0.6) {
      memo.push(r);
    }

    return memo;
  }, []);
}

var docContextValue = {
  dokumentStore: dokumentStore,
  rootPath: './',
  componentList: undefined,
  search: search,
  title: '',
  htmdxOptions: {},
  scrollContainerSelector: 'main'
};
var docContext =
/*#__PURE__*/
createContext(docContextValue);

var getJSON = function getJSON(filePath) {
  try {
    return Promise.resolve(ky.get(filePath).json());
  } catch (e) {
    return Promise.reject(e);
  }
};
var getFile = function getFile(filePath) {
  try {
    return Promise.resolve(ky.get(filePath).text());
  } catch (e) {
    return Promise.reject(e);
  }
};
var getHeaders = function getHeaders(filePath) {
  try {
    return Promise.resolve(ky.head(filePath).then(function (r) {
      return r.headers;
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
function join() {
  var parts = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0, l = args.length; i < l; i++) {
    parts = parts.concat(args[i].split('/'));
  }

  var newParts = [];

  for (var _i = 0, _l = parts.length; _i < _l; _i++) {
    var part = parts[_i];
    if (!part || part === '.') continue;
    if (part === '..') newParts.pop();else newParts.push(part);
  }

  if (parts[0] === '') newParts.unshift('');
  return newParts.join('/') || (newParts.length ? '/' : '.');
}

function useDocContext() {
  return useContext(docContext);
}

function LastChanged(props) {
  return createElement("div", {
    className: "last-changed"
  }, createElement("div", null, "last changed: "), createElement("div", null, new Date(props.timestamp).toLocaleString()));
}

var hCount = 0;
var mdxContext =
/*#__PURE__*/
createContext({});
var components = {
  Demo: function Demo() {
    return createElement("h1", null, "This is a demo component");
  }
};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (h) {
  var Component = function Component(props) {
    var _React$useContext = useContext(mdxContext),
        currentDocument = _React$useContext.currentDocument;

    var check = props.children;

    if (check instanceof Array) {
      check = createElement('div', {
        children: props.children
      });
    }

    var text = isValidElement(check) ? innerText(check) : props.children;
    var heading = currentDocument.headings.find(function (heading) {
      return text.toString().includes(heading.text);
    });
    return createElement(h, {
      key: h + hCount++,
      id: heading && heading.slug,
      children: [createElement(Fragment, null, heading ? createElement(Link, {
        to: "" + heading.slug
      }, heading.text) : props.children)]
    });
  };

  components[h] = Component;
});
function DocumentRenderer(props) {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      _useDocContext$htmdxO = _useDocContext.htmdxOptions,
      htmdxOptions = _useDocContext$htmdxO === void 0 ? {
    components: {}
  } : _useDocContext$htmdxO,
      dokumentStore = _useDocContext.dokumentStore;

  var PreviousAndNext = componentList.PreviousAndNext;
  var Provider = mdxContext.Provider;

  var _useDocContext2 = useDocContext(),
      scrollContainerSelector = _useDocContext2.scrollContainerSelector;

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.documentMap, state.currentDocument];
  }),
      documentMap = _useStoreState[0],
      currentDocument = _useStoreState[1];

  useEffect(function () {
    var heading = document.getElementById(props.headingSlug);

    if (heading) {
      var scrollTarget = heading.parentElement.firstElementChild === heading ? document.querySelector('article') : heading;
      scrollIntoView(scrollTarget, {
        validTarget: function validTarget(target) {
          return target.matches && target.matches(scrollContainerSelector);
        },
        align: {
          top: 0
        }
      });
    }
  }, [props.headingSlug, currentDocument]);
  var previous;
  var next;

  if (currentDocument) {
    var slugs = Object.keys(documentMap);
    var docIndex = slugs.indexOf(currentDocument.slug);

    if (docIndex > 0) {
      previous = documentMap[slugs[docIndex - 1]];
    }

    if (docIndex < slugs.length - 1) {
      next = documentMap[slugs[docIndex + 1]];
    }
  }

  return createElement(Provider, {
    value: {
      currentDocument: currentDocument
    }
  }, createElement(PreviousAndNext, {
    previous: previous,
    next: next
  }), createElement("div", null, htmdx(currentDocument.content, createElement, _extends({}, htmdxOptions, {
    components: _extends({}, components, {}, htmdxOptions.components)
  }))), createElement(PreviousAndNext, {
    previous: previous,
    next: next
  }), currentDocument.lastModified > -1 && createElement(LastChanged, {
    timestamp: currentDocument.lastModified
  }));
}

function Nav() {
  var _useDocContext = useDocContext(),
      dokumentStore = _useDocContext.dokumentStore;

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.navbar];
  }),
      navbar = _useStoreState[0];

  var NavLevel = useDocContext().componentList.NavLevel;
  return createElement(Menu, {
    defaultOpenKeys: ['sub1'],
    mode: "inline"
  }, createElement(NavLevel, {
    navbar: navbar
  }));
}

var Sider$1 = Layout.Sider;
function SideBar() {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList;

  var Nav = componentList.Nav;
  return createElement(Suspense, {
    fallback: ""
  }, createElement(Sider$1, null, createElement(Nav, null)));
}

function RenderArticle() {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      dokumentStore = _useDocContext.dokumentStore;

  var DocumentRenderer = componentList.DocumentRenderer;

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.documentMap, state.currentDocument || null];
  }),
      documentMap = _useStoreState[0];

  var _useParams = useParams(),
      slug = _useParams.slug,
      headingSlug = _useParams.headingSlug;

  var documentForSlug = !slug ? Object.values(documentMap)[0] : documentMap[slug];
  useEffect(function () {
    if (documentForSlug) {
      setCurrentDocument(documentForSlug);
    }
  }, [slug, documentForSlug]);
  return createElement(DocumentRenderer, {
    slug: slug,
    headingSlug: headingSlug
  });
}

function Main() {
  var Loading = useDocContext().componentList.Loading;
  return createElement("main", null, createElement("article", null, createElement(Switch, null, createElement(Route, {
    path: "/document/:slug?/:headingSlug?"
  }, createElement(Suspense, {
    fallback: createElement(Loading, null)
  }, createElement(RenderArticle, null))), createElement(Route, {
    path: "/"
  }, createElement(Suspense, {
    fallback: createElement(Loading, null)
  }, createElement(RenderArticle, null))))));
}

function useHandleSearchFocus(searchQuery, setSearchQuery, inputRef) {
  var location = useLocation();
  useEffect(function () {
    setSearchQuery(null);
  }, [location]);
  useLayoutEffect(function () {
    if (searchQuery === null) {
      inputRef.current.blur();
    }
  }, [searchQuery]);
  useEffect(function () {
    var listener = function listener(event) {
      var target = event.target;

      if (target === document.body) {
        setSearchQuery(null);
        return;
      }

      while (target !== document.body) {
        if (target instanceof HTMLAnchorElement) {
          if (target.href.replace(window.location.href.replace(window.location.hash, ''), '')[0] === '#') {
            setSearchQuery(null);
            return;
          }
        }

        target = target.parentElement;
      }
    };

    document.body.addEventListener('click', listener);
    return function () {
      document.body.removeEventListener('click', listener);
    };
  }, []);
  useEffect(function () {
    var listener = function listener(e) {
      if (e.key === 'Escape') {
        setSearchQuery(null);
      }
    };

    inputRef.current.addEventListener('keyup', listener);
    return function () {
      inputRef.current.removeEventListener('keyup', listener);
    };
  }, [inputRef.current]);
  useEffect(function () {
    var listener = function listener() {
      setSearchQuery('');
    };

    inputRef.current.addEventListener('focus', listener);
    return function () {
      inputRef.current.removeEventListener('focus', listener);
    };
  }, [inputRef.current]);
}

function Search() {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      dokumentStore = _useDocContext.dokumentStore;

  var SearchResults = componentList.SearchResults;

  var _React$useState = useState(null),
      searchQuery = _React$useState[0],
      setSearchQuery = _React$useState[1];

  var inputRef = useRef();
  useHandleSearchFocus(searchQuery, setSearchQuery, inputRef);

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.allDocumentsLoaded];
  }),
      allDocumentsLoaded = _useStoreState[0];

  return createElement("div", {
    className: "search"
  }, searchQuery && searchQuery.length > 0 && createElement(SearchResults, {
    searchQuery: searchQuery
  }), createElement("input", {
    ref: inputRef,
    type: "text",
    value: searchQuery,
    placeholder: allDocumentsLoaded ? 'Search documents' : 'Preparing search...',
    onChange: function onChange(e) {
      return setSearchQuery(e.currentTarget.value);
    },
    disabled: !allDocumentsLoaded
  }));
}

function useGetTo() {
  var _useDocContext = useDocContext(),
      rootPath = _useDocContext.rootPath;

  return function (doc) {
    var topHeading = doc && doc.headings[0] && doc.headings[0].size === 1 ? doc.headings[0] : undefined;
    return [join('/document', rootPath, doc.slug, topHeading ? topHeading.slug : ''), topHeading];
  };
}

function PreviousAndNext(props) {
  var previous = props.previous,
      next = props.next;
  var getTo = useGetTo();
  return createElement("div", {
    className: "previous-next"
  }, previous && createElement("div", {
    className: "previous"
  }, createElement("span", null, createElement(Link, {
    to: getTo(previous)[0]
  }, previous.title))), next && createElement("div", {
    className: "next"
  }, createElement("span", null, createElement(Link, {
    to: getTo(next)[0]
  }, next.title))));
}

var NavbarItemType;

(function (NavbarItemType) {
  NavbarItemType[NavbarItemType["CATEGORY"] = 0] = "CATEGORY";
  NavbarItemType[NavbarItemType["DOCUMENT"] = 1] = "DOCUMENT";
})(NavbarItemType || (NavbarItemType = {}));

function NavItem(props) {
  var _useDocContext = useDocContext(),
      dokumentStore = _useDocContext.dokumentStore,
      componentList = _useDocContext.componentList;

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.documentMap];
  }),
      documentMap = _useStoreState[0];

  var NavLevel = componentList.NavLevel;
  var document = documentMap[props.slug];
  var topHeading = document && document.headings[0] && document.headings[0].size === 1 ? document.headings[0] : undefined;
  var path = "" + props.path + (topHeading ? "/" + topHeading.slug : "");
  var linkRef = useRef(undefined);
  var subNav = document && document.headings.filter(function (heading, index) {
    return heading.size < 4 && (index > 0 || heading.size > 1);
  }).reduce(function (memo, heading) {
    memo[heading.text] = {
      type: NavbarItemType.DOCUMENT,
      slug: (props.path + "/" + heading.slug).replace('document/', '')
    };
    return memo;
  }, {});
  return createElement(Fragment, null, createElement(Menu.Item, {
    key: path,
    onClick: function onClick() {
      return linkRef.current.click();
    }
  }, createElement(Link, {
    to: "" + props.path + (topHeading ? "/" + topHeading.slug : ""),
    ref: linkRef
  }, topHeading ? topHeading.text : props.children)), subNav && createElement(NavLevel, {
    navbar: subNav
  }));
}

var SubMenu = Menu.SubMenu;
function NavLevel(props) {
  var navbar = props.navbar;

  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList;

  var _useDocContext2 = useDocContext(),
      dokumentStore = _useDocContext2.dokumentStore;

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.documentMap];
  }),
      docMap = _useStoreState[0];

  var NavItem = componentList.NavItem,
      NavLevel = componentList.NavLevel;
  var titles = Object.keys(navbar);
  var docArray = Object.values(docMap);
  var prevDocument = docArray[0]; //const getTo = useGetTo();

  return createElement(SubMenu, null, titles.map(function (title) {
    var _navbar$title = navbar[title],
        type = _navbar$title.type,
        children = _navbar$title.children,
        slug = _navbar$title.slug;

    if (type === NavbarItemType.CATEGORY) {
      var next = docArray[docArray.indexOf(prevDocument) + 1];

      if (next && next.slug) {
        //const [to] = getTo(next);
        //<Link to={to}>{title}</Link>
        return createElement(NavLevel, Object.assign({}, {
          navbar: children
        }));
      } else {
        return createElement(NavLevel, Object.assign({}, {
          navbar: children
        }));
      }
    } else {
      prevDocument = docMap[slug];
      return createElement(NavItem, {
        key: slug,
        path: '/document/' + slug,
        slug: slug
      }, title);
    }
  }));
}

var useSearch = function useSearch(query) {
  var _React$useState = useState([]),
      result = _React$useState[0],
      setResult = _React$useState[1];

  var timeOutId = useRef(0);

  var _useDocContext = useDocContext(),
      search = _useDocContext.search;

  useEffect(function () {
    clearTimeout(timeOutId.current);
    timeOutId.current = setTimeout(function () {
      var result = search(query);
      setResult(result);
    }, 500);
  }, [query]);
  return result;
};

function SearchResults(props) {
  var searchQuery = props.searchQuery;

  var _useDocContext2 = useDocContext(),
      componentList = _useDocContext2.componentList;

  var SearchResultsItem = componentList.SearchResultsItem;

  var _useDocContext3 = useDocContext(),
      dokumentStore = _useDocContext3.dokumentStore;

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.documentMap];
  }),
      documentMap = _useStoreState[0];

  var result = useSearch(searchQuery);
  console.log(result);
  return createElement("div", {
    className: 'search-results'
  }, createElement("h1", null, "Listing ", result.length, " document", result.length !== 1 ? 's' : '', " with search results for ", searchQuery, ":"), createElement("ul", null, result.map(function (r) {
    var doc = documentMap[r.slug];
    return createElement(SearchResultsItem, {
      doc: doc,
      searchQuery: searchQuery
    });
  })));
}

function getSentencesWithSearchResults(text, searchWords) {
  return text.split(/[.?!\n]/).filter(function (n) {
    return new RegExp("" + searchWords.join('|'), 'i').test(n);
  });
}

function SearchResultsItem(props) {
  var doc = props.doc,
      searchQuery = props.searchQuery;
  var getTo = useGetTo();
  return createElement("li", {
    key: doc.slug
  }, createElement("label", null, createElement(Link, {
    to: getTo(doc)[0]
  }, createElement(Highlighter, {
    highlightClassName: "search-highlight",
    searchWords: [searchQuery],
    autoEscape: true,
    textToHighlight: doc.title
  }))), getSentencesWithSearchResults(removeMarkdown(doc.content), [searchQuery]).map(function (item) {
    return createElement("pre", {
      key: item
    }, createElement(Highlighter, {
      highlightClassName: "search-highlight",
      searchWords: [searchQuery],
      autoEscape: true,
      textToHighlight: item
    }));
  }));
}

function Loading() {
  return createElement(Fragment, null, createElement("style", {
    type: "text/css"
  }, "\n                .loading {\n                    margin: 20px auto;\n                    margin-top: 50%;\n                    width: 40px;\n                    height: 40px;\n                    position: relative;\n                    -webkit-transform: rotateZ(45deg);\n                        transform: rotateZ(45deg);\n                }\n\n                .loading .cube {\n                float: left;\n                width: 50%;\n                height: 50%;\n                position: relative;\n                -webkit-transform: scale(1.1);\n                    -ms-transform: scale(1.1);\n                        transform: scale(1.1); \n                }\n                .loading .cube:before {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #333;\n                -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n                        animation: sk-foldCubeAngle 2.4s infinite linear both;\n                -webkit-transform-origin: 100% 100%;\n                    -ms-transform-origin: 100% 100%;\n                        transform-origin: 100% 100%;\n                }\n                .loading .cube2 {\n                -webkit-transform: scale(1.1) rotateZ(90deg);\n                        transform: scale(1.1) rotateZ(90deg);\n                }\n                .loading .cube3 {\n                -webkit-transform: scale(1.1) rotateZ(180deg);\n                        transform: scale(1.1) rotateZ(180deg);\n                }\n                .loading .cube4 {\n                -webkit-transform: scale(1.1) rotateZ(270deg);\n                        transform: scale(1.1) rotateZ(270deg);\n                }\n                .loading .cube2:before {\n                -webkit-animation-delay: 0.3s;\n                        animation-delay: 0.3s;\n                }\n                .loading .cube3:before {\n                -webkit-animation-delay: 0.6s;\n                        animation-delay: 0.6s; \n                }\n                .loading .cube4:before {\n                -webkit-animation-delay: 0.9s;\n                        animation-delay: 0.9s;\n                }\n                @-webkit-keyframes sk-foldCubeAngle {\n                0%, 10% {\n                    -webkit-transform: perspective(140px) rotateX(-180deg);\n                            transform: perspective(140px) rotateX(-180deg);\n                    opacity: 0; \n                } 25%, 75% {\n                    -webkit-transform: perspective(140px) rotateX(0deg);\n                            transform: perspective(140px) rotateX(0deg);\n                    opacity: 1; \n                } 90%, 100% {\n                    -webkit-transform: perspective(140px) rotateY(180deg);\n                            transform: perspective(140px) rotateY(180deg);\n                    opacity: 0; \n                } \n                }\n\n                @keyframes sk-foldCubeAngle {\n                0%, 10% {\n                    -webkit-transform: perspective(140px) rotateX(-180deg);\n                            transform: perspective(140px) rotateX(-180deg);\n                    opacity: 0; \n                } 25%, 75% {\n                    -webkit-transform: perspective(140px) rotateX(0deg);\n                            transform: perspective(140px) rotateX(0deg);\n                    opacity: 1; \n                } 90%, 100% {\n                    -webkit-transform: perspective(140px) rotateY(180deg);\n                            transform: perspective(140px) rotateY(180deg);\n                    opacity: 0; \n                }\n                }\n        "), createElement("div", {
    className: "loading"
  }, createElement("div", {
    className: "cube1 cube"
  }), createElement("div", {
    className: "cube2 cube"
  }), createElement("div", {
    className: "cube4 cube"
  }), createElement("div", {
    className: "cube3 cube"
  })));
}

function Branding(props) {
  return createElement("div", {
    className: "branding"
  }, props.children);
}

function Recent() {
  var _useDocContext = useDocContext(),
      dokumentStore = _useDocContext.dokumentStore;

  var _useStoreState = useStoreState(dokumentStore, function (state) {
    return [state.currentDocument];
  }),
      currentDocument = _useStoreState[0];

  var _React$useState = useState(localStorage.getItem('recent-document') ? JSON.parse(localStorage.getItem('recent-document')) : []),
      recentDocuments = _React$useState[0],
      setRecentDocuments = _React$useState[1];

  useEffect(function () {
    if (currentDocument) {
      var index = recentDocuments.findIndex(function (_ref) {
        var document = _ref.document;
        return currentDocument.slug === document.slug;
      });

      if (index > -1) {
        recentDocuments.splice(index, 1);
      }

      recentDocuments.unshift({
        document: currentDocument,
        timestamp: Date.now()
      });
      setRecentDocuments(recentDocuments);
      localStorage.setItem('recent-document', JSON.stringify(recentDocuments));
    }
  }, [currentDocument]);
  var getTo = useGetTo();
  return createElement("div", {
    className: "recent"
  }, createElement("div", null, "recently viewed:"), createElement("ul", null, recentDocuments.map(function (_ref2) {
    var document = _ref2.document,
        timestamp = _ref2.timestamp;

    var _getTo = getTo(document),
        to = _getTo[0],
        heading = _getTo[1];

    return createElement("li", {
      key: heading.text + timestamp
    }, createElement("span", {
      className: "recent-time"
    }, new Date(timestamp).toLocaleString()), createElement(Link, {
      to: to
    }, heading.text));
  })));
}

function Header$1() {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      title = _useDocContext.title;

  var Search = componentList.Search,
      Branding = componentList.Branding;
  return createElement("header", {
    className: "header"
  }, createElement(Branding, null, title), createElement(Search, null));
}

var componentListValue = {
  DocumentRenderer: DocumentRenderer,
  NavItem: NavItem,
  NavLevel: NavLevel,
  Nav: Nav,
  SideBar: SideBar,
  Main: Main,
  Search: Search,
  PreviousAndNext: PreviousAndNext,
  SearchResults: SearchResults,
  SearchResultsItem: SearchResultsItem,
  Loading: Loading,
  Branding: Branding,
  LastChanged: LastChanged,
  Recent: Recent,
  Header: Header$1
};

// A type of promise-like that resolves synchronously and supports only one observer
const _Pact = /*#__PURE__*/(function() {
	function _Pact() {}
	_Pact.prototype.then = function(onFulfilled, onRejected) {
		const result = new _Pact();
		const state = this.s;
		if (state) {
			const callback = state & 1 ? onFulfilled : onRejected;
			if (callback) {
				try {
					_settle(result, 1, callback(this.v));
				} catch (e) {
					_settle(result, 2, e);
				}
				return result;
			} else {
				return this;
			}
		}
		this.o = function(_this) {
			try {
				const value = _this.v;
				if (_this.s & 1) {
					_settle(result, 1, onFulfilled ? onFulfilled(value) : value);
				} else if (onRejected) {
					_settle(result, 1, onRejected(value));
				} else {
					_settle(result, 2, value);
				}
			} catch (e) {
				_settle(result, 2, e);
			}
		};
		return result;
	};
	return _Pact;
})();

// Settles a pact synchronously
function _settle(pact, state, value) {
	if (!pact.s) {
		if (value instanceof _Pact) {
			if (value.s) {
				if (state & 1) {
					state = value.s;
				}
				value = value.v;
			} else {
				value.o = _settle.bind(null, pact, state);
				return;
			}
		}
		if (value && value.then) {
			value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
			return;
		}
		pact.s = state;
		pact.v = value;
		const observer = pact.o;
		if (observer) {
			observer(pact);
		}
	}
}

function _isSettledPact(thenable) {
	return thenable instanceof _Pact && thenable.s & 1;
}

// Asynchronously iterate through an object that has a length property, passing the index as the first argument to the callback (even as the length property changes)
function _forTo(array, body, check) {
	var i = -1, pact, reject;
	function _cycle(result) {
		try {
			while (++i < array.length && (!check || !check())) {
				result = body(i);
				if (result && result.then) {
					if (_isSettledPact(result)) {
						result = result.v;
					} else {
						result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
						return;
					}
				}
			}
			if (pact) {
				_settle(pact, 1, result);
			} else {
				pact = result;
			}
		} catch (e) {
			_settle(pact || (pact = new _Pact()), 2, e);
		}
	}
	_cycle();
	return pact;
}

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

// Asynchronously iterate through an object's values
// Uses for...of if the runtime supports it, otherwise iterates until length on a copy
function _forOf(target, body, check) {
	if (typeof target[_iteratorSymbol] === "function") {
		var iterator = target[_iteratorSymbol](), step, pact, reject;
		function _cycle(result) {
			try {
				while (!(step = iterator.next()).done && (!check || !check())) {
					result = body(step.value);
					if (result && result.then) {
						if (_isSettledPact(result)) {
							result = result.v;
						} else {
							result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
							return;
						}
					}
				}
				if (pact) {
					_settle(pact, 1, result);
				} else {
					pact = result;
				}
			} catch (e) {
				_settle(pact || (pact = new _Pact()), 2, e);
			}
		}
		_cycle();
		if (iterator.return) {
			var _fixup = function(value) {
				try {
					if (!step.done) {
						iterator.return();
					}
				} catch(e) {
				}
				return value;
			};
			if (pact && pact.then) {
				return pact.then(_fixup, function(e) {
					throw _fixup(e);
				});
			}
			_fixup();
		}
		return pact;
	}
	// No support for Symbol.iterator
	if (!("length" in target)) {
		throw new TypeError("Object is not iterable");
	}
	// Handle live collections properly
	var values = [];
	for (var i = 0; i < target.length; i++) {
		values.push(target[i]);
	}
	return _forTo(values, function(i) { return body(values[i]); }, check);
}

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var fetchDocuments =
/*#__PURE__*/
function (_fetchDocuments) {
  function fetchDocuments(_x, _x2) {
    return _fetchDocuments.apply(this, arguments);
  }

  fetchDocuments.toString = function () {
    return _fetchDocuments.toString();
  };

  return fetchDocuments;
}(function (rootPath, navbar) {
  try {
    return Promise.resolve(_forOf(Object.keys(navbar), function (title) {
      var _navbar$title = navbar[title],
          slug = _navbar$title.slug,
          children = _navbar$title.children,
          type = _navbar$title.type,
          path = _navbar$title.path;

      var _temp7 = function () {
        if (type === NavbarItemType.CATEGORY) {
          return Promise.resolve(fetchDocuments(rootPath, children)).then(function () {});
        } else {
          var _temp8 = function _temp8() {
            function _temp4() {
              var _temp2 = _catch(function () {
                return Promise.resolve(getFile(_docPath)).then(function (content) {
                  var document = {
                    title: title,
                    content: content,
                    path: _docPath,
                    slug: slug,
                    headings: findHeadings(content),
                    lastModified: lastModifiedTimestamp
                  };
                  localStorage.setItem(document.slug, JSON.stringify(document));
                  return Promise.resolve(addDocument(document)).then(function () {});
                });
              }, function () {});

              if (_temp2 && _temp2.then) return _temp2.then(function () {});
            }

            var lastModified = _headers && _headers.get('last-modified');

            var lastModifiedTimestamp = -1;

            if (lastModified) {
              lastModifiedTimestamp = new Date(lastModified).getTime();
            }

            var _temp3 = function () {
              if (_document) {
                var _temp10 = function () {
                  if (_document.lastModified === lastModifiedTimestamp) {
                    return Promise.resolve(addDocument(_document)).then(function () {});
                  }
                }();

                if (_temp10 && _temp10.then) return _temp10.then(function () {});
              }
            }();

            return _temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3);
          };

          var _docPath = join(rootPath, path);

          var _document = JSON.parse(localStorage.getItem(slug));

          var _headers;

          var _temp9 = _catch(function () {
            return Promise.resolve(getHeaders(_docPath)).then(function (_getHeaders) {
              _headers = _getHeaders;
            });
          }, function () {});

          return _temp9 && _temp9.then ? _temp9.then(_temp8) : _temp8(_temp9);
        }
      }();

      if (_temp7 && _temp7.then) return _temp7.then(function () {});
    }));
  } catch (e) {
    return Promise.reject(e);
  }
});
var fetchNavbar = function fetchNavbar(path) {
  try {
    return Promise.resolve(getJSON(join(path, 'navbar.docs.json'))).then(buildNavbar);
  } catch (e) {
    return Promise.reject(e);
  }
};
function findHeadings(document) {
  var parts = document.split(/\n/g);
  var headings = [];
  var i = 0;

  for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var part = _ref;

    if (part.trim()[0] === '#') {
      var size = 1;

      while (part[size] && part[size] === '#') {
        size++;
      }

      var text = removeMarkdown(part);
      text = text.trim();
      headings.push({
        size: size,
        text: text,
        raw: part,
        slug: i + "-" + slugify(text)
      });
      i++;
    }
  }

  return headings;
}
function buildNavbar(navbarJSON) {
  var navbar = {};

  for (var _i2 = 0, _Object$keys = Object.keys(navbarJSON); _i2 < _Object$keys.length; _i2++) {
    var title = _Object$keys[_i2];
    var entry = navbarJSON[title];

    if (typeof entry === 'object') {
      navbar[title] = {
        type: NavbarItemType.CATEGORY,
        children: buildNavbar(entry)
      };
    } else {
      var slug = slugify(entry);
      navbar[title] = {
        type: NavbarItemType.DOCUMENT,
        slug: slug,
        path: entry
      };
    }
  }

  return navbar;
}
function slugify(path) {
  var a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  var b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  var p = new RegExp(a.split('').join('|'), 'g');
  return path.toString().toLowerCase().replace(/.mdx/g, '').replace(/\s+/g, '-').replace(p, function (c) {
    return b.charAt(a.indexOf(c));
  }).replace(/&/g, '-and-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

var dokument = function dokument(container, optionsIn) {
  if (optionsIn === void 0) {
    optionsIn = {};
  }

  try {
    var options = _extends({
      rootPath: './',
      title: 'Documentation',
      htmdxOptions: _extends({}, optionsIn.htmdxOptions),
      navbarPath: ''
    }, optionsIn, {
      componentList: _extends({}, componentListValue, {}, optionsIn.componentList || {})
    });

    document.title = options.title;
    load(options);
    var Provider = docContext.Provider;
    render(createElement(Provider, {
      value: _extends({}, docContextValue, {}, options)
    }, createElement(Docs, null)), container);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

var load = function load(options) {
  try {
    return Promise.resolve(fetchNavbar(join(options.rootPath, options.navbarPath))).then(function (navbar) {
      return Promise.resolve(setNavBar(navbar)).then(function () {
        return Promise.resolve(fetchDocuments(options.rootPath, navbar)).then(function () {
          setDocumentsLoaded();
        });
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

var defaultComponentList =
/*#__PURE__*/
_extends({}, componentListValue);

export { defaultComponentList, dokument };
//# sourceMappingURL=dokument.js.esm.js.map
