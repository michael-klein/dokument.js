'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var ReactDOM = require('react-dom');
require('@babel/polyfill');
var pullstate = require('pullstate');
var ky = _interopDefault(require('ky'));
var removeMarkdown = _interopDefault(require('remove-markdown'));
var elasticlunr = _interopDefault(require('elasticlunr'));
var reactRouterDom = require('react-router-dom');
var MDX = _interopDefault(require('@mdx-js/runtime'));
var innerText = _interopDefault(require('react-innertext'));
var reactRouter = require('react-router');
var Highlighter = _interopDefault(require('react-highlight-words'));

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
    var documentMap = {};

    var _temp3 = _forOf(Object.keys(navbar), function (title) {
      var _navbar$title = navbar[title],
          slug = _navbar$title.slug,
          children = _navbar$title.children,
          type = _navbar$title.type,
          path = _navbar$title.path;

      var _temp = function () {
        if (type === NavbarItemType.CATEGORY) {
          return Promise.resolve(fetchDocuments(rootPath, children)).then(function (subResult) {
            documentMap = _extends({}, documentMap, {}, subResult);
          });
        } else {
          var docPath = join(rootPath, path);
          return Promise.resolve(getFile(docPath)).then(function (content) {
            documentMap[slug] = {
              title: title,
              content: content,
              path: docPath,
              slug: slug,
              headings: findHeadings(content)
            };
          });
        }
      }();

      if (_temp && _temp.then) return _temp.then(function () {});
    });

    return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {
      return documentMap;
    }) : documentMap);
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
var NavbarItemType;

(function (NavbarItemType) {
  NavbarItemType[NavbarItemType["CATEGORY"] = 0] = "CATEGORY";
  NavbarItemType[NavbarItemType["DOCUMENT"] = 1] = "DOCUMENT";
})(NavbarItemType || (NavbarItemType = {}));

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

var docStore =
/*#__PURE__*/
new pullstate.Store({
  documentMap: {},
  documentsLoaded: false
});
var docStoreActions = {
  loadNavbar: function loadNavbar(path) {
    try {
      return Promise.resolve(fetchNavbar(path)).then(function (navbar) {
        docStore.update(function (state) {
          state.navbar = navbar;
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  },
  loadDocuments: function loadDocuments(rootPath, navbar) {
    try {
      return Promise.resolve(fetchDocuments(rootPath, navbar)).then(function (documentMap) {
        docStore.update(function (state) {
          state.documentMap = _extends({}, state.documentMap, {}, documentMap);
          state.documentsLoaded = true;
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  },
  getNavbar: function getNavbar() {
    try {
      var navbar = docStore.getRawState().navbar;

      var _temp3 = function () {
        if (!navbar) {
          return Promise.resolve(new Promise(function (resolve) {
            var unsubscribe = docStore.subscribe(function (state) {
              return state.navbar;
            }, function (navbar) {
              if (navbar) {
                resolve(navbar);
                unsubscribe();
              }
            });
          })).then(function (_temp) {
            navbar = _temp;
          });
        }
      }();

      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {
        return navbar;
      }) : navbar);
    } catch (e) {
      return Promise.reject(e);
    }
  }
};

var index =
/*#__PURE__*/
elasticlunr(function () {
  this.addField('title');
  this.addField('content');
  this.setRef('id');
  this.saveDocument(true);
});
function addDocumentToIndex(doc) {
  index.addDoc({
    id: doc.slug,
    title: doc.title,
    content: doc.content
  });
}
function search(query) {
  return index.search(query, {
    title: {
      boost: 2
    },
    content: {
      boost: 1
    }
  }).map(function (result) {
    return {
      slug: result.ref,
      score: result.score
    };
  });
}

var docContextValue = {
  docStore: docStore,
  remarkPlugins: [],
  rehypePlugins: [],
  rootPath: './',
  componentList: undefined,
  search: search,
  title: '',
  mdxComponents: {}
};
var docContext =
/*#__PURE__*/
React.createContext(docContextValue);

function useDocContext() {
  return React.useContext(docContext);
}

function useDocStore(getSubState) {
  return pullstate.useStoreState(docStore, getSubState);
}

function Docs() {
  var _useDocContext$compon = useDocContext().componentList,
      SideBar = _useDocContext$compon.SideBar,
      Main = _useDocContext$compon.Main,
      Loading = _useDocContext$compon.Loading;
  var documentsLoaded = useDocStore(function (state) {
    return state.documentsLoaded;
  });
  return React.createElement("div", {
    className: "docs"
  }, documentsLoaded ? React.createElement(reactRouterDom.HashRouter, null, React.createElement(SideBar, null), React.createElement(Main, null)) : React.createElement(Loading, null));
}

function useSaveDocument(slug) {
  if (slug === void 0) {
    slug = '';
  }

  var _useDocContext = useDocContext(),
      docStore = _useDocContext.docStore;

  var documentMap = docStore.getRawState().documentMap;
  var document = documentMap[slug];

  if (!document) {
    return Object.values(documentMap)[0];
  }

  return document;
}

var hCount = 0;
var mdxContext =
/*#__PURE__*/
React.createContext({});
var components = {
  Demo: function Demo() {
    return React.createElement("h1", null, "This is a demo component");
  }
};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (h) {
  components[h] = function (props) {
    var _React$useContext = React.useContext(mdxContext),
        currentDocument = _React$useContext.currentDocument;

    var check = props.children;

    if (check instanceof Array) {
      check = React.createElement('div', {
        children: props.children
      });
    }

    var text = React.isValidElement(check) ? innerText(check) : props.children;
    var heading = currentDocument.headings.find(function (heading) {
      return text.toString().includes(heading.text);
    });
    return React.createElement(h, {
      key: h + hCount++,
      id: heading && heading.slug,
      children: [React.createElement(React.Fragment, null, heading ? React.createElement(reactRouterDom.Link, {
        to: "" + heading.slug
      }, heading.text) : props.children)]
    });
  };
});
function DocumentRenderer(props) {
  var _useDocContext = useDocContext(),
      rehypePlugins = _useDocContext.rehypePlugins,
      remarkPlugins = _useDocContext.remarkPlugins,
      componentList = _useDocContext.componentList,
      mdxComponents = _useDocContext.mdxComponents;

  var PreviousAndNext = componentList.PreviousAndNext;
  var Provider = mdxContext.Provider;
  var currentDocument = useSaveDocument(props.slug);
  React.useEffect(function () {
    var heading = document.getElementById(props.headingSlug);

    if (heading) {
      heading.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [props.headingSlug, currentDocument]);
  var documentMap = useDocStore(function (state) {
    return state.documentMap;
  });
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

  return currentDocument ? React.createElement(Provider, {
    value: {
      currentDocument: currentDocument
    }
  }, React.createElement(PreviousAndNext, {
    previous: previous,
    next: next
  }), React.createElement("div", null, React.createElement(MDX, {
    components: _extends({}, components, {}, mdxComponents),
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins
  }, currentDocument.content)), React.createElement(PreviousAndNext, {
    previous: previous,
    next: next
  })) : React.createElement("div", null, "loading document...");
}

function Nav() {
  var _useDocStore = useDocStore(function (state) {
    return [state.documentsLoaded, state.navbar];
  }),
      documentsLoaded = _useDocStore[0],
      navbar = _useDocStore[1];

  var NavLevel = useDocContext().componentList.NavLevel;
  return !documentsLoaded ? React.createElement("div", null, "loading navbar...") : React.createElement("nav", null, React.createElement(NavLevel, Object.assign({}, {
    navbar: navbar
  })));
}

function SideBar() {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      title = _useDocContext.title;

  var Nav = componentList.Nav,
      Search = componentList.Search;
  return React.createElement("aside", {
    className: "sidebar"
  }, React.createElement("h1", null, title), React.createElement(Search, null), React.createElement(Nav, null));
}

function RenderArticle() {
  var DocumentRenderer = useDocContext().componentList.DocumentRenderer;

  var _useParams = reactRouter.useParams(),
      slug = _useParams.slug,
      headingSlug = _useParams.headingSlug;

  return React.createElement(DocumentRenderer, {
    slug: slug,
    headingSlug: headingSlug
  });
}

function Main() {
  return React.createElement("main", null, React.createElement("article", null, React.createElement(reactRouter.Switch, null, React.createElement(reactRouter.Route, {
    path: "/document/:slug?/:headingSlug?"
  }, React.createElement(RenderArticle, null)), React.createElement(reactRouter.Route, {
    path: "/"
  }, React.createElement(RenderArticle, null)))));
}

function useClearSearchOnLinkClicked(setSearchQuery) {
  React.useEffect(function () {
    var listener = function listener(event) {
      console.log(event);
      var target = event.target;

      while (target !== document.body) {
        if (target instanceof HTMLAnchorElement) {
          if (target.href.replace(window.location.href.replace(window.location.hash, ''), '')[0] === '#') {
            setSearchQuery('');
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
}

function Search() {
  var SearchResults = useDocContext().componentList.SearchResults;

  var _React$useState = React.useState(''),
      searchQuery = _React$useState[0],
      setSearchQuery = _React$useState[1];

  var location = reactRouterDom.useLocation();
  React.useEffect(function () {
    setSearchQuery('');
  }, [location]);
  useClearSearchOnLinkClicked(setSearchQuery);
  return React.createElement("div", {
    className: "search"
  }, searchQuery.length > 0 && React.createElement(SearchResults, {
    searchQuery: searchQuery
  }), React.createElement("input", {
    type: "text",
    value: searchQuery,
    placeholder: "search...",
    onChange: function onChange(e) {
      return setSearchQuery(e.currentTarget.value);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Escape') {
        setSearchQuery('');
      }
    }
  }));
}

function useGetTo() {
  var _useDocContext = useDocContext(),
      rootPath = _useDocContext.rootPath;

  return function (doc) {
    var topHeading = doc && doc.headings[0] && doc.headings[0].size === 1 ? doc.headings[0] : undefined;
    return join('/document', rootPath, doc.slug, topHeading ? topHeading.slug : '');
  };
}

function PreviousAndNext(props) {
  var previous = props.previous,
      next = props.next;
  var getTo = useGetTo();
  return React.createElement("div", {
    className: "previous-next"
  }, previous && React.createElement("div", {
    className: "previous"
  }, React.createElement("span", null, React.createElement(reactRouterDom.Link, {
    to: getTo(previous)
  }, previous.title))), next && React.createElement("div", {
    className: "next"
  }, React.createElement("span", null, React.createElement(reactRouterDom.Link, {
    to: getTo(next)
  }, next.title))));
}

function NavItem(props) {
  var documentMap = useDocStore(function (state) {
    return state.documentMap;
  });
  var document = documentMap[props.slug];
  var topHeading = document && document.headings[0] && document.headings[0].size === 1 ? document.headings[0] : undefined;
  return React.createElement("li", {
    className: "nav-item link"
  }, React.createElement(reactRouterDom.Link, {
    to: "" + props.path + (topHeading ? "/" + topHeading.slug : "")
  }, topHeading ? topHeading.text : props.children), document && React.createElement("ul", {
    className: "nav"
  }, document.headings.filter(function (heading, index) {
    return heading.size < 4 && (index > 0 || heading.size > 1);
  }).map(function (heading) {
    return React.createElement(NavItem, {
      key: heading.raw,
      path: props.path + "/" + heading.slug
    }, heading.text);
  })));
}

function NavLevel(props) {
  var navbar = props.navbar;
  var _useDocContext$compon = useDocContext().componentList,
      NavItem = _useDocContext$compon.NavItem,
      NavLevel = _useDocContext$compon.NavLevel;
  return React.createElement("ul", {
    className: "nav"
  }, Object.keys(navbar).map(function (title) {
    var _navbar$title = navbar[title],
        type = _navbar$title.type,
        children = _navbar$title.children,
        slug = _navbar$title.slug;

    if (type === NavbarItemType.CATEGORY) {
      return React.createElement("li", {
        className: "nav-item sub-nav",
        key: slug + type
      }, React.createElement("div", {
        className: "nav-category"
      }, title), React.createElement(NavLevel, Object.assign({}, {
        navbar: children
      })));
    } else {
      return React.createElement(NavItem, {
        key: slug + type,
        path: '/document/' + slug,
        slug: slug
      }, title);
    }
  }));
}

function SearchResults(props) {
  var searchQuery = props.searchQuery;

  var _useDocContext = useDocContext(),
      search = _useDocContext.search,
      componentList = _useDocContext.componentList;

  var SearchResultsItem = componentList.SearchResultsItem;
  var documentMap = useDocStore(function (state) {
    return state.documentMap;
  });
  var result = search(searchQuery);
  return React.createElement("div", {
    className: 'search-results'
  }, React.createElement("h1", null, "Listing ", result.length, " document", result.length !== 1 ? 's' : '', " with search results for ", searchQuery, ":"), React.createElement("ul", null, result.map(function (r) {
    var doc = documentMap[r.slug];
    return React.createElement(SearchResultsItem, {
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
  return React.createElement("li", {
    key: doc.slug
  }, React.createElement("label", null, React.createElement(reactRouterDom.Link, {
    to: getTo(doc)
  }, React.createElement(Highlighter, {
    highlightClassName: "search-highlight",
    searchWords: [searchQuery],
    autoEscape: true,
    textToHighlight: doc.title
  }))), getSentencesWithSearchResults(removeMarkdown(doc.content), [searchQuery]).map(function (item) {
    return React.createElement("pre", {
      key: item
    }, React.createElement(Highlighter, {
      highlightClassName: "search-highlight",
      searchWords: [searchQuery],
      autoEscape: true,
      textToHighlight: item
    }));
  }));
}

function Loading() {
  return React.createElement(React.Fragment, null, React.createElement("style", {
    type: "text/css"
  }, "\n                .loading {\n                    margin: 20px auto;\n                    width: 40px;\n                    height: 40px;\n                    position: relative;\n                    -webkit-transform: rotateZ(45deg);\n                        transform: rotateZ(45deg);\n                }\n\n                .loading .cube {\n                float: left;\n                width: 50%;\n                height: 50%;\n                position: relative;\n                -webkit-transform: scale(1.1);\n                    -ms-transform: scale(1.1);\n                        transform: scale(1.1); \n                }\n                .loading .cube:before {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #333;\n                -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n                        animation: sk-foldCubeAngle 2.4s infinite linear both;\n                -webkit-transform-origin: 100% 100%;\n                    -ms-transform-origin: 100% 100%;\n                        transform-origin: 100% 100%;\n                }\n                .loading .cube2 {\n                -webkit-transform: scale(1.1) rotateZ(90deg);\n                        transform: scale(1.1) rotateZ(90deg);\n                }\n                .loading .cube3 {\n                -webkit-transform: scale(1.1) rotateZ(180deg);\n                        transform: scale(1.1) rotateZ(180deg);\n                }\n                .loading .cube4 {\n                -webkit-transform: scale(1.1) rotateZ(270deg);\n                        transform: scale(1.1) rotateZ(270deg);\n                }\n                .loading .cube2:before {\n                -webkit-animation-delay: 0.3s;\n                        animation-delay: 0.3s;\n                }\n                .loading .cube3:before {\n                -webkit-animation-delay: 0.6s;\n                        animation-delay: 0.6s; \n                }\n                .loading .cube4:before {\n                -webkit-animation-delay: 0.9s;\n                        animation-delay: 0.9s;\n                }\n                @-webkit-keyframes sk-foldCubeAngle {\n                0%, 10% {\n                    -webkit-transform: perspective(140px) rotateX(-180deg);\n                            transform: perspective(140px) rotateX(-180deg);\n                    opacity: 0; \n                } 25%, 75% {\n                    -webkit-transform: perspective(140px) rotateX(0deg);\n                            transform: perspective(140px) rotateX(0deg);\n                    opacity: 1; \n                } 90%, 100% {\n                    -webkit-transform: perspective(140px) rotateY(180deg);\n                            transform: perspective(140px) rotateY(180deg);\n                    opacity: 0; \n                } \n                }\n\n                @keyframes sk-foldCubeAngle {\n                0%, 10% {\n                    -webkit-transform: perspective(140px) rotateX(-180deg);\n                            transform: perspective(140px) rotateX(-180deg);\n                    opacity: 0; \n                } 25%, 75% {\n                    -webkit-transform: perspective(140px) rotateX(0deg);\n                            transform: perspective(140px) rotateX(0deg);\n                    opacity: 1; \n                } 90%, 100% {\n                    -webkit-transform: perspective(140px) rotateY(180deg);\n                            transform: perspective(140px) rotateY(180deg);\n                    opacity: 0; \n                }\n                }\n        "), React.createElement("div", {
    className: "loading"
  }, React.createElement("div", {
    className: "cube1 cube"
  }), React.createElement("div", {
    className: "cube2 cube"
  }), React.createElement("div", {
    className: "cube4 cube"
  }), React.createElement("div", {
    className: "cube3 cube"
  })));
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
  Loading: Loading
};

var docs = function docs(container, optionsIn) {
  if (optionsIn === void 0) {
    optionsIn = {};
  }

  try {
    var options = _extends({
      rootPath: './',
      remarkPlugins: [],
      rehypePlugins: [],
      title: 'Documentation',
      mdxComponents: {},
      navbarPath: ''
    }, optionsIn, {
      componentList: _extends({}, componentListValue, {}, optionsIn.componentList || {})
    });

    document.title = options.title;
    load(options);
    var Provider = docContext.Provider;
    ReactDOM.render(React.createElement(Provider, {
      value: _extends({}, docContextValue, {}, options)
    }, React.createElement(Docs, null)), container);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

var load = function load(options) {
  try {
    return Promise.resolve(docStoreActions.loadNavbar(join(options.rootPath, options.navbarPath))).then(function () {
      return Promise.resolve(docStoreActions.loadDocuments(options.rootPath, docStore.getRawState().navbar)).then(function () {
        Object.values(docStore.getRawState().documentMap).forEach(function (doc) {
          addDocumentToIndex(doc);
        });
        console.log(docStore);
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

var defaultComponentList =
/*#__PURE__*/
_extends({}, componentListValue);

exports.defaultComponentList = defaultComponentList;
exports.docs = docs;
//# sourceMappingURL=dokument.js.cjs.development.js.map
